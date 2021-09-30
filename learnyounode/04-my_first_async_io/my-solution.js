const fs = require('fs')
const filepath = process.argv[2]

fs.readFile(filepath, 'utf8', (err, str) => {
  if (err) return
  const num = str.split('\n').length - 1
  console.log(num)
})
