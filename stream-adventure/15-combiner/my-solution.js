const combine = require('stream-combiner')
const split2 = require('split2')
const through2 = require('through2')
const zlib = require('zlib')

module.exports = function () {
  let current
  function write(buf, _, next) {
    const line = buf.toString()
    const obj = JSON.parse(line)
    if (obj.type === 'genre') {
      // 如果是 genre 且 current 有值，说明这个 genre 是新的类型，便需要将之前的 genre 给发出去
      if(current){
        this.push(JSON.stringify(current) + '\n')
      }
      // 这里的初始化类型对象有两种情况，一是一开始还是 undefined 的情况，另外一种情况是已经将之前的类型对象发出去了
      current = { name: obj.name, books: [] }
    } else {
      if(current){
        current.books.push(obj.name)
      }
    }
    next()
  }

  function end(done) {
    // 这里 push 发出去的是最后一种类型
    this.push(JSON.stringify(current) + '\n')
    done()
  }
  // read newline-separated json,
  // group books into genres,
  // then gzip the output
  return combine(split2(), through2(write, end), zlib.createGzip())
}
