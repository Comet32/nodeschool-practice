const fs = require('fs');

const filepath = process.argv[2]

const buffer = fs.readFileSync(filepath)
const str = buffer.toString()
const newlineAmount = str.split('\n').length - 1

console.log(newlineAmount)
