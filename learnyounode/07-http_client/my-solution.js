const http = require('http')

const [, , url] = process.argv

http.get(url, function(res) {
  res.setEncoding('utf8')
  res.on('data', function(data){
    console.log(data)
  })
})
