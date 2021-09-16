const [, , url] = process.argv;
const bl = require('bl');
const http = require('http');

http.get(url, (res) => {
  res.setEncoding('utf8');
  let data = '';
  res.on('data', (str) => (data += str));
  res.on('end', () => {
    console.log(data.length);
    console.log(data);
  });
});

// 以下是官方给出的参考答案，以备你做比较参考:
('use strict');
const http = require('http');
const bl = require('bl');

http.get(process.argv[2], function (response) {
  response.pipe(
    bl(function (err, data) {
      console.log('bl data:', data)
      if (err) {
        return console.error(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    }),
  );
});
