var isHappy = function(n) {
  let numArr = n
    .toString()
    .split("")
    .map(Number)
  let result = null
  const results = []
  while (result != 1) {
    result = numArr.map(num => num * num).reduce((a, b) => a + b, 0)
    numArr = result
      .toString()
      .split("")
      .map(Number)
    if (results.includes(result)) {
      break
    }
    results.push(result)
  }
  return result === 1
}

console.log(isHappy(20))
