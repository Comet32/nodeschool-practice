const fs = require('fs');
const filepath = process.argv[2]

console.log(`filepath`, filepath)

fs.createReadStream(filepath).pipe(process.stdout)
