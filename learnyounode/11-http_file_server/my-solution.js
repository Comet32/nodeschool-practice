const http = require('http')
const fs = require('fs')

const [, , port, filepath] = process.argv

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream(filepath)
  fileStream.pipe(res)
})

server.listen(port)
