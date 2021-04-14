const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total + el
const total = numbers.reduce(sum)
console.log(total)

const totalV2 = numbers.reduce(sum, 100)
console.log(totalV2)

const avg = (acc, el, index, array) => {
  if (index === array.length - 1) {
    return (acc + el) / array.length
  } else {
    return acc + el
  }
} 

const result = numbers.reduce(avg)
console.log(result)
