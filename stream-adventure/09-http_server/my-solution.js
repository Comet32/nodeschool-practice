const http = require('http');
const through2 = require('through2');

const port = process.argv[2]

const server = http.createServer(function(req, res){
  if(req.method === 'POST'){
    req.pipe(through2(write)).pipe(res)
  }else{
    res.end('send me a POST\n')
  }
})

server.listen(port)

function write(buf, encoding, next){
  this.push(buf.toString().toUpperCase())
  next()
}
