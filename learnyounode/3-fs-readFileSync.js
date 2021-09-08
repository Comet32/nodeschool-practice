const fs = require('fs')

const filePath = process.argv[process.argv.length - 1]
const buffer = fs.readFileSync(filePath)
const fileString = buffer.toString()
const lines = fileString.match(/\n/g).length
console.log(lines)

// official answer
const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)

// 只要把 'utf8' 作为 readFileSync 的第二个参数传入
// 就可以不用 .toString() 来得到一个字符串
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
