class Person {
	#name = 'John'
	#age = 29
	constructor(name, age) {
		this.#name = name
		this.#age = age
	}

	#getDetails() {
		return `${this.#name} is ${this.#age}`
	}

	publicDetails() {
		return this.#getDetails()
	}
}

class _Math {
	static abs(a) {
		if (!a) {
			throw new Error('Empty value argument')
		}
		if (typeof a !== 'number') {
			throw new Error('Value must be of type "number"')
		}

		if (a < 0) {
			return -1 * a
		} else {
			return a
		}
	}
}

class Animal {
	constructor(name) {
		this.name = name
	}

	speak() {
		console.log(`${this.name} makes noise`)
	}
}

class Dog extends Animal {
	constructor(name, breed) {
		super(name)
		this.breed = breed
	}

	speak() {
		console.log(`${this.name} barks, and the breed is ${this.breed}!`)
	}
}

const dog = new Dog('Rex', 'Ekuke')

class Engine {
	start() {
		console.log('Engine starts')
	}
}

class Car {
	constructor() {
		this.engine = new Engine()
	}

	start() {
		this.engine.start()
		console.log('Car started')
	}
}

const myCar = new Car()

class Database {
	save(data) {
		console.log(`Saving ${data} to database`)
	}
}

class UserService {
	constructor(database) {
		this.database = database
	}

	createUser(name) {
		this.database.save(name)
	}
}

const db = new Database()
const userService = new UserService(db)
userService.createUser('John')
