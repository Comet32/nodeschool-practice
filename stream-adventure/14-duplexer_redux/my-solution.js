const duplexer = require('duplexer2')
const through = require('through2')

module.exports = function (counter) {
  // return a duplex stream to count countries on the writable side
  // and pass through `counter` on the readable side
  const counts = {}
  const input = through(write, end)
  // counter.setCounts(counts)
  // console.log(`counter`, counter)
  return duplexer(input, counter)

  function write(row, _, next) {
    console.log(`row`, row)
    debugger
    const key = row.count
    counts[key] = (counts[key] || 0) + 1
    next()
  }

  function end(done) {
    counter.setCounts(counts)
    done()
  }
}
