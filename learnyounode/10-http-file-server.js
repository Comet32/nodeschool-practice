const [, , port, filepath] = process.argv;
const http = require('http');
const fs = require('fs');

const stream = fs.createReadStream(filepath);

const server = http.createServer((req, res) => {
  stream.pipe(res);
});

server.listen(port);

('use strict');
const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });

  fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));
