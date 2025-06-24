const os = require('node:os')

console.log('Free memory', os.freemem())
console.log('Uptime (mins)', os.uptime() / 60 / 60)
console.log('CPUs', os.cpus().length)
