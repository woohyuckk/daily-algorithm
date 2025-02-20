// function solution(s1, s2) {
//     let isLength = (s1.length > s2.length)
//     let filteredArr = [];
//     if(isLength){
        
//         filteredArr = s1.filter((str)=>{ 
//         return s2.includes(str)})
                  
//     }
//     else{
//         filteredArr = s2.filter((str)=>{
//         return s1.includes(str)})
//     }
    
//     return filteredArr.length;
// }

// // 두배열의 길이를 재서 배열의 길이가 작은 배열을 기준으로 길이가 긴 배열을 순회한다.


function solution(s1,s2){
  const answer = s1.filter((str)=>{return s2.includes(str)})
  return answer.length
}