const fs = require('fs');
const path = require('path');
const filePath = process.argv[2]
const extensionName = "." + process.argv[3]

const filterList = require('./6-module.js')

filterList(filePath, extensionName, function(err, list){
  if(err) return console.error(errs)
  list.forEach((list) => {
    console.log(list)
  })
})
