// function solution(n, control) {
    
//     for (let str of control){
//         if(str==="w") n=n+1;
//         if(str==="s") n=n-1;
//         if(str==="d") n=n+10;
//         if(str==="a") n=n-10;
//     }
    
//     return n;
// }

function solution(n,control){
    const controlArr = control.split("")
    
    let answer = controlArr.reduce((a,r)=>{
      return r==="w"?a+1:
      r==="s"?a-1:
      r==="d"?a+10:
      r==="a"?a-10:a
    },n)
    
    return answer
    
    
}