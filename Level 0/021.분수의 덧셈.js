// function solution(numer1, denom1, numer2, denom2) {
    
//     let numer3 = numer1*denom2+numer2*denom1;
//     let denom3 = denom1*denom2;
    
//     var answer = [numer3, denom3];
    
//     let divisor = 2;
    
//     while (numer3%divisor===0 && denom3%divisor===0 ){
//         numer3 /= divisor;
//         denom3 /= divisor; 
//     }
    
    
//     return [numer3,denom3];
// }

function solution(numer1, denom1, numer2, denom2) {
  // 두 분수를 더함: (numer1/denom1) + (numer2/denom2)
  const commonDenom = denom1 * denom2; // 공통 분모
  const newNumer = numer1 * denom2 + numer2 * denom1; // 새로운 분자

  // 약분 과정
  return simplify(newNumer, commonDenom);
}

function simplify(numerator, denominator) {
  // 두 수의 최대공약수를 찾기 위한 반복
  let min = Math.min(numerator, denominator);
  let divisor = 2; // 시작 소수

  // 가능한 모든 소수로 나누어 약분
  while (divisor <= min) {
      while (numerator % divisor === 0 && denominator % divisor === 0) {
          numerator /= divisor;
          denominator /= divisor; // 약분
      }
      divisor++; // 다음 수로
  }
  
  return [numerator, denominator]; // 기약 분수 반환
}