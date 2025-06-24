const { exec } = require('child_process')

spawn('ls -la', (err, stdout) => {
	if (err) return console.error(err)
	console.log(stdout)
})
