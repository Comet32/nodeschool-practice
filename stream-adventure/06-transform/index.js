const through = require('through2');

const transformStream = through(write, end);

function write(buffer, encoding, next) {
  console.log('------------------------------');
  console.log(`process.stdin`, process.stdin);
  console.log('------------------------------');
  console.log('this', this);
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

// process.stdin.pipe(transformStream)

process.stdin.pipe(transformStream).pipe(process.stdout);
