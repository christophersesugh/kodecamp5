function Person(name, age) {
	this.name = name
	this.age = age
}

Person.prototype.greet = function () {
	return "Hello, I'am " + this.name
}

Person.prototype.getAge = function () {
	return this.age
}

const p1 = new Person('Kodecamp', 5)
const p2 = new Person('Kodehauz', 10)

function Animal(name) {
	this.name = name
}

Animal.prototype.speak = function () {
	return this.name + ' makes sound'
}

function Dog(name, breed) {
	Animal.call(this, name)
	this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.bark = function () {
	return this.name + ' is of breed ' + this.breed + ' and it barks!'
}

const myDog = new Dog('Stan', 'Ekuke')

class Shape {
	constructor(name) {
		this.name = name
	}

	describe() {
		return `This is a ${this.name}`
	}
}

class Rectangle extends Shape {
	constructor(width, height, name) {
		super(name)
		this.width = width
		this.height = height
		this.name = name
	}

	area() {
		return this.width * this.height
	}

	getName() {
		return this.name
	}
}

const nR = new Rectangle(23, 45, 'Stan')
console.log(nR.area())
console.log(nR.getName())
console.log(nR.describe())

function add(a, b) {
	return a + b
}

let total = 0

total = 89

function addTotal(amount) {
	total += amount
	return total
}
addTotal(5)
