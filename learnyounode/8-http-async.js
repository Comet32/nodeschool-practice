const http = require('http');
const [,,...urls] = process.argv

let results = [null, null, null]

urls.forEach((url, index) => {
  http.get(url, (res) => {
    res.setEncoding('utf8')
    res.on('error', (err) => {console.error(err)})
    res.on('data', (data) => {
      if(results[index] === null){
        results[index] = data
      }else{
        results[index] += data
      }
    })
  })
})

function printResults(){
    results.forEach(res => console.log(res))
}

setTimeout(() => {
  printResults()
}, 3000)

// official
'use strict'
const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
