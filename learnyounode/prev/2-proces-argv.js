const result = process.argv.slice(2).reduce((acc, item) => {
  return acc + Number(item)
},0)

console.log(result)
