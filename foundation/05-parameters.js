function logParams(a, b, c) {
  console.log(a, b, c)
}

logParams(1, 2, 3)
logParams(1, 2, 3, 4, 5)
logParams(1, 2)
logParams(1)
logParams()



function defaultParams(a = 1, b = 2, c = 0) {
  console.log(a, b, c)
}

defaultParams(7, 8, 9)
defaultParams(7, 8)
defaultParams(7)
defaultParams()



// spread/rest
function logsNums(...nums) {
  console.log(nums)
}

logsNums(1, 2, 3, 4, 5, 6)



function sumAll(...nums) {
  let total = 0

  for(let n of nums) {
    total += n
  }

  return total
}

console.log(sumAll(1, 3, 2, 4, 5, 6))