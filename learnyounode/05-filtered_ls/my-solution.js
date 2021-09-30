const fs = require('fs')
const [, , filepath, extName] = process.argv

fs.readdir(filepath,(err, list) => {
  const filteredList = list.filter(name => {
    const reg = new RegExp(`\.${extName}\$`)
    return name.match(reg)
  })
  filteredList.forEach(name => console.log(name))
})
