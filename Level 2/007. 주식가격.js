function solution(prices) {
  const length = prices.length;

  return prices.map((price, idx, arr) => {
      const dropIdx = arr.slice(idx + 1).findIndex(p => p < price);
      return dropIdx === -1 ? length - 1 - idx : dropIdx + 1;
  });
}


// 시간복잡도가 높음 