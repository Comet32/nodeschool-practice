const fs = require('fs');

const filePath = process.argv[process.argv.length - 1];
let lines = 0
fs.readFile(filePath,'utf8',(err, data) => {
  if(err) return
  lines = data.split('\n').length - 1
  console.log(lines)
})

// official answer
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // 你也可以使用 fs.readFile(file, 'utf8', callback)
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
