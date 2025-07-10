// Basic types inference
let lastName = 'John'
let pAge = 25
let isAdmin = true
let items: number[] = [1, 2, 3]

let emp = ['John']

// Function return type inference
function add(a: number, b: number) {
	return a + b
}

function fullName(fName: string, lName: string) {
	return `${fName} ${lName}`
}

function processUser(user: { name: string }) {
	return user.name
}

//Complex inference with conditions
function processValue(number: number) {
	if (number > 0) {
		return 'positive'
	} else if (number < 0) {
		return 'negative'
	} else {
		return 0
	}
}

//Contextual type inference
let nums = [1, 2, 3, 4, 5, 'John']
nums.forEach(num => {
	if (typeof num === 'number') {
		console.log(num.toFixed(2))
	} else {
		console.log(num.toUpperCase())
	}
})
