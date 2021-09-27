const fs = require('fs');
const path = require('path');

module.exports = function (dirname, extname, callback) {
  fs.readdir(dirname, (err, fileList) => {
    if(err) return callback(err)
    const filteredList = fileList.filter(file => path.extname(file) === extname)
    callback(null, filteredList)
  })
}
