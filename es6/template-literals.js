const sent = `
my name,
your name
`
const sent2 = 'my name,\nyour name'
const sent3 = `myname => ${sent2}`

console.log(sent3)

function highlight(strings, ...values) {
	return strings
		.map((string, i) => {
			const value = values[i] ? `<mark>${values[i]}</mark>` : ''
			return string + value
		})
		.join('')
}

const term = 'Javascript'
const term2 = 'Kodecamp'
const text = highlight`Learn ${term} programming with ${term2}`

console.log(text)

const escaped = String.raw`My name\nyour name`
console.log(escaped)
