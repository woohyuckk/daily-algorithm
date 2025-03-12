function solution(prices) {
  const length = prices.length;

  return prices.map((price, idx, arr) => {
      const dropIdx = arr.slice(idx + 1).findIndex(p => p < price);
      return dropIdx === -1 ? length - 1 - idx : dropIdx + 1;
  });
}


// 시간복잡도가 높음


function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
      // 스택의 마지막 값이 현재 가격보다 크면, 떨어진 시점이므로 pop
      for (let j = stack.length - 1; j >= 0; j--) {
          const top = stack[j];
          if (prices[top] > prices[i]) {
              answer[top] = i - top;
              stack.pop();
          }
      }
      stack.push(i);
  }

  // 스택에 남아있는 값들은 끝까지 가격이 떨어지지 않은 것
  stack.forEach(index => {
      answer[index] = prices.length - 1 - index;
  });

  return answer;
}

// 시간복잡도 짧음