const fs = require('fs')
const path = require('path')

module.exports = function (dirname, extname, callback) {
  fs.readdir(dirname, function (err, files) {
    if (err) {
      return callback(err)
    }
    const extFiles = files.filter((file) => {
      return path.extname(file).includes(extname)
    })
    callback(null, extFiles)
  })
}
