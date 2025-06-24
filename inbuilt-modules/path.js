const path = require('node:path')

const filePath = path.join(__dirname, 'file.txt')

console.log(filePath)
console.log(path.basename(filePath))
console.log(path.extname(filePath))
