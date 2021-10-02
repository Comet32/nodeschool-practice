const http = require('http');
const through2 = require('through2-map');

const [,,port] = process.argv

const server = http.createServer((req,res) => {
  req.pipe(through2(chunk => {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(port)
