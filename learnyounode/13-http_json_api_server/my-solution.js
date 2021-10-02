const http = require('http')
const { URL } = require('url')

const [, , port] = process.argv

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  const url = new URL(req.url, 'http://example.com')
  const { pathname, searchParams } = url
  const iso = searchParams.get('iso')
  const date = new Date(iso)
  // console.log(`req.url`, req.url)
  // console.log(`url`, url)
  if (pathname === '/api/parsetime') {
    const time = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    }
    const timeStr = JSON.stringify(time)
    res.write(timeStr)
  } else if (pathname === '/api/unixtime') {
    const time = {
      unixtime: date.getTime(),
    }
    const timeStr = JSON.stringify(time)
    res.write(timeStr)
  }
  res.end()
})

server.listen(port)
