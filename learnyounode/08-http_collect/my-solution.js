const http = require('http')

const [,,url] = process.argv

let count = 0
let completeStr = ''

http.get(url, function(res) {
  res.setEncoding('utf8')
  res.on('data', function(str){
    count += str.length
    completeStr += str
  })
  res.on('end', function(){
    console.log(count)
    console.log(completeStr)
  })
})
