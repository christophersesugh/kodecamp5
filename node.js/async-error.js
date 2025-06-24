// function badErrorHandling() {
// 	fs.readFile('filename', (err, data) => {
// 		if (err) {
// 			console.log(err)
// 		}
// 		console.log(data)
// 	})
// }

process.on('uncaughtException', err => {})
process.on('unhandledRejection', err => {})
process.on('SIGTERM', err => {})
