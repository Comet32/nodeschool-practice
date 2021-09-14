const net = require('net');
const port = process.argv[2];

console.log(`port`, port);

const server = net.createServer((socket) => {
  const date = new Date();
  const [year, month, day, hour, minute, second] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  // console.log(`year, month, day, hour, minute, second`, year, month, day, hour, minute, second);
  const data = `${year}-${String(month + 1).padStart(2, 0)}-${day} ${hour}:${minute}\n`;
  socket.end(data);
});
server.listen(port);

('use strict');
const net = require('net');

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i;
}

function now() {
  const d = new Date();
  return (
    d.getFullYear() +
    '-' +
    zeroFill(d.getMonth() + 1) +
    '-' +
    zeroFill(d.getDate()) +
    ' ' +
    zeroFill(d.getHours()) +
    ':' +
    zeroFill(d.getMinutes())
  );
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n');
});

server.listen(Number(process.argv[2]));
