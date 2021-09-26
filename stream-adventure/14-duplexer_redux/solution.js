const duplexer2 = require('duplexer2')
const through = require('through2')

module.exports = function (counter) {
  const counts = {}
  const input = through(write, end)
  return duplexer2({ objectMode: true }, input, counter)

  function write (row, _, next) {
    counts[row.country] = (counts[row.country] || 0) + 1
    next()
  }
  function end (done) {
    counter.setCounts(counts)
    done()
  }
}
