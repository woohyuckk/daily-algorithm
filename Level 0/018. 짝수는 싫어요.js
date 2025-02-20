// function solution(n) {
    
//     let index = Math.floor(n/2)
//     let result = [];
//     if ( n%2 ===0)
//         {
//             index -= 1
//         }
//     for (i=0; i<=index; i++)
//         {
//             result.push(2*i+1);
//         }
    
//     return result;
// }

function solution(n) {
  var answer = [];

  for (let i = 1; i<=n; i+=2) answer.push(i)

  return answer;
}