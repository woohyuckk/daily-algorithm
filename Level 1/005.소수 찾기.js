function solution(numbers) {
  const digits = numbers.split('');
  const createdNumbers = new Set();
  
  // 재귀적으로 순열(부분집합 포함) 생성
  function makeNumbers(path, used) {
    // 빈 문자열이 아닐 경우, 현재 조합을 숫자로 변환하여 set에 추가
    if (path.length > 0) {
      createdNumbers.add(Number(path.join('')));
    }
    
    // 모든 자릿수를 사용하지 않았더라도, 계속해서 새로운 숫자 조합을 만듭니다.
    for (let i = 0; i < digits.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(digits[i]);
      makeNumbers(path, used);
      path.pop();
      used[i] = false;
    }
  }
  
  makeNumbers([], new Array(digits.length).fill(false));
  
  // 소수 판별 함수
  function isPrime(num) {
    if (num < 2) return false; // 0, 1은 소수가 아님
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  let count = 0;
  // set에 저장된 모든 숫자에 대해 소수 판별 후 카운트 증가
  createdNumbers.forEach(num => {
    if (isPrime(num)) count++;
  });
  
  return count;
}
