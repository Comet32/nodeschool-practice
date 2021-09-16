const http = require('http');
const url = require('url');
const { URL } = url

const [, , port] = process.argv;

const server = http.createServer((req, res) => {
  const { url } = req;
  const { searchParams } = new URL(url,'http://localhost:8080');
  const iso = searchParams.get('iso');
  const date = new Date(iso);
  const time = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.write(JSON.stringify(time))
});

server.listen(port);
