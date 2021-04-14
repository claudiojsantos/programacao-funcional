// Anonymous Function
(function (a, b, c) {
  return a + b + c
})



// Function Expression
const sum = function (a, b) {
  return a + b
}
const result = sum(1, 2)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5, 9))