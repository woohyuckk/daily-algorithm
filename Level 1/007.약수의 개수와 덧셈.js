function solution(left, right) {
  let answer = 0;

  for (let num = left; num <= right; num++) {
    // num의 약수 개수를 구한다.
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }

    // 약수 개수가 짝수이면 더하고, 홀수이면 뺀다.
    if (count % 2 === 0) {
      answer += num;
    } else {
      answer -= num;
    }
  }
  
  return answer;
}



// if left가 right보다 작을시 for문을 통해 약수 찾기 갯수가 홀수 이면 return 에 - , 짝수 이면 return 에 +