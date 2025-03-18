function solution(arr) {

  let min = arr[0]

  arr.forEach((e) => {
    if (e < min) min = e
  })
  const answer = arr.filter((e) => e !== min)

  if (answer.length === 0) {
    return [-1]
  }
  return answer

}

// Math.min(...arr) ES5이후 풀이방법

function solution(arr) {

  arr.splice(arr.indexOf(Math.min(...arr)), 1)

  if (arr.length === 0) {
    return [-1]
  }
  return arr

}



