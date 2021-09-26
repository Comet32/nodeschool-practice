const crypto = require('crypto')

// console.log(` process.argv[2], process.argv[3]`,  process.argv[2], process.argv[3])

process.stdin
  .pipe(crypto.createDecipheriv('aes256', process.argv[2], process.argv[3]))
  .pipe(process.stdout)
