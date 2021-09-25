const http = require('http')
const concat = require('concat-stream')
const { request } = http

const options = {
  method: 'POST',
}

const req = request('http://localhost:8099', options, (res) => {
  res.pipe(process.stdout)
})

req.on('error', (err) => {
  console.log(`err`, err)
})

process.stdin.pipe(concat(function(data){
  req.write(data.toString())
  req.end()
}))

// 这一步等于是将 write 和 end 都调用了
process.stdin.pipe(req)
