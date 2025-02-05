// const solution = (arr) =>{
    
//      let answer = arr.reduce((acc,res)=>{ 
//      const exists = acc.includes(res) 
     
//      if(!exists){
//          acc.push(res)
//          return acc
//      }else{
//          return acc
//      } 
     
//      },[])
//     return answer
// }
// 첫번째 풀이 -> 중복 생각을 안해서 실패 

const solution = (arr) =>{
    
    return arr.reduce((acc,res)=>{

        if(acc.length === 0 || acc[acc.length-1] !== res  ){
            acc.push(res)
        }
        return acc
    
    },[])    
    
}

//         처음 acc의 length는 0일때 첫요소 추가
//         첫요소와 1번째 인덱스가 같지 않으면 추가 
