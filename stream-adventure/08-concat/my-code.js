const concat = require('concat-stream')

process.stdin.pipe(concat(function(result){
  const str = result.toString()
  const reverse = str.split('').reverse().join('')
  process.stdout.write(reverse)
}))
