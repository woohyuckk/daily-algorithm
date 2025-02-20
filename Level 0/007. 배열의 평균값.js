function solution(numbers) {
  var answer = 0;
  for(i=0; i<numbers.length; i++){
   answer +=  numbers[i];
  }
  return answer/numbers.length;
}

// a[i] 0~ a.length-1까지 더하면 되지않을까