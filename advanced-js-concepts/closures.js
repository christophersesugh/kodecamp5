function outerFunction(m = 2) {
	// lexical scope starting
	let l = 20
	function innerFunction(n) {
		console.log(m + n + l)
	}
	// lexical scope ending
	return innerFunction
}

function createCounter() {
	let count = 0
	return function () {
		count++
		return count
	}
}

const c1 = createCounter()
const c2 = createCounter()

function bankAccount(initialBalance) {
	let balance = initialBalance

	return {
		deposit: function (amount) {
			balance += amount
			return balance
		},

		withdraw: function (amount) {
			if (amount <= balance) {
				balance -= amount
				return balance
			}

			return 'Insufficient funds'
		},

		getBalance: function () {
			return balance
		},
	}
}

const account = bankAccount(100)

for (var i = 0; i < 4; i++) {
	;(function (index) {
		setTimeout(function () {
			console.log(index)
		}, 100)
	})(i)
}
