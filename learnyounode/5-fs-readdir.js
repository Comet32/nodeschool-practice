const fs = require('fs');
const filePath = process.argv[2];
const extensionName = process.argv[3];

fs.readdir(filePath, (err, list) => {
  if (err) {
    console.err(err);
    return;
  }
  list.filter(name => name.includes('.' + extensionName)).forEach((name) => {
    console.log(name)
  })
});

// official
'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
