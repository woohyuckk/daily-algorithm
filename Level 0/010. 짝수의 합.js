// function solution(n) {
//     let answer = 0;
//     let quetient = Math.floor(n/2);
    
//     for ( i=0; i<=quetient; i++)
//         {
//             answer = answer + 2*i;
//         }
//     return answer;
// }

//다른 방법으로 풀면 

const solution = (n) => Math.floor(n/2)*(Math.floor(n/2)+1)

//등차수열의 합공식 n/2 * (a+l)  몫을 k 라고 했을때 l은 2k,첫항은 2  k/2 * (2+2k)  k*(1+k)