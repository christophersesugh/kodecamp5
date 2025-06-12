const names = ['John', 'Kent']
// const f = names[0]
// const t = names[2]

const [f, s, t = 'Josh'] = names
console.log(t)

let m = 9,
	n,
	z = 5
console.log(m, z)

n = m
z = m
console.log(m, z)

let x = 4,
	y = 6
console.log(x, y)
;[x, y] = [y, x]

console.log(x, y)

const data = {
	name: 'John',
	age: 29,
	address: {
		city: 'New york',
		country: 'Nigeria',
	},
}

const {
	name,
	surname = 'Pablo',
	address: { city, country },
} = data

console.log(name, country, surname)
