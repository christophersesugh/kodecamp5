const obj = { name: 'John', age: 39 }
// const obj2 = { ...obj, name: 'Kent' }

const obj2 = Object.assign(obj, { name: 'Kent' })
console.log(obj2)

const arr = [1, 2, 3]
const sArr = [...arr, 4]
console.log(sArr)
