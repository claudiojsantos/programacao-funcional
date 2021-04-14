const numbers = [1, 2, 3, 4, 5, 6]

const students = [
  { name: 'Jake', score: 6.4 },
  { name: 'Susan', score: 8.6 },
  { name: 'Emma', score: 9.4 },
  { name: 'Peter', score: 9.1 }
]

const new_numbers = numbers.map( el => el * 2)
console.log(numbers, new_numbers)

const score = students.map( el => el.score )
console.log(score)

console.log(new_numbers.map( el => el * 2))

console.log(score.map(Math.ceil))