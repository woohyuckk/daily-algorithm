// function solution(angle) {
//     let answer = 0;
//     if (0<angle && angle<90){
//         answer = 1;
//     }
//     else if(angle === 90){
//         answer = 2;
//     }
//     else if(90<angle && angle <180){
//         answer = 3;
//     }
//     else if(angle === 180){
//         answer = 4;
//     }
//     return answer;
// }


function solution(angle) {
  return angle === 180 ? 4 :
         angle > 90 ? 3 :
         angle === 90 ? 2 :
         angle > 0 ? 1 : 0;
}