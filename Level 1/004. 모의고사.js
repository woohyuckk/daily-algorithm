function solution(answers) {
  let one = [1,2,3,4,5];
  let two = [2,1,2,3,2,4,2,5];
  let three = [3,3,1,1,2,2,4,4,5,5]
 
  
  const scores = answers.reduce((acc, res, idx) =>{
      if( res === one[idx%5]) acc[0]++;
      if( res === two[idx%8]) acc[1]++;
      if( res === three[idx%10]) acc[2]++;
      return acc
  } ,[0,0,0])

  const maxScore = Math.max(...scores);
  
  const result = [];
  scores.forEach((score,idx)=>{
      if(score === maxScore) result.push(idx+1); 
  })
  
  return result
  
}

