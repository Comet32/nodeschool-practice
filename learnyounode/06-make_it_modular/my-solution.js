const getExtFiles = require('./my-module')

const [,,dirname,extname] = process.argv

getExtFiles(dirname, extname, function (err, list){
  if(err) console.error(err)
  list.forEach(function(file){
    console.log(file)
  })
})
