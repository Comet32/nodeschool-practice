const split2 = require('split2');
const through2 = require('through2');

let count = 1;

const th = through2(function (line, encoding, next) {
  if (count % 2 === 0) {
    this.push(line.toString().toUpperCase() + '\n');
  } else {
    this.push(line.toString().toLowerCase() + '\n');
  }
  count++;
  next();
});

process.stdin.pipe(split2()).pipe(th).pipe(process.stdout);
