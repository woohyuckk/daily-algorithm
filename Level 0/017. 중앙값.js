function solution(array) {
  let centervalue = array.sort( (a,b)=> a-b); 
  let mid = Math.floor(centervalue.length/2);
  if( centervalue.length %2 === 0){
      return (centervalue[mid]+centervalue[mid-1])/2    
  }
  else{
      return centervalue[mid]      
  }
}