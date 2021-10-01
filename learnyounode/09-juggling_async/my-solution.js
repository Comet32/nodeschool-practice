const http = require('http')
const bl = require('bl')

const [, , url1, url2, url3] = process.argv

let all = [null, null, null]

process.argv.forEach((url, index) => {
  if (index < 2) return
  http.get(url, (res) => {
    res.pipe(bl((err, data) => {
      if(err) console.error(err)
      all[index - 2] = data.toString()
      if(all.every(item => !!item)){
        all.forEach(item => {
          console.log(item)
        })
      }
    }))
  })
})
