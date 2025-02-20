function solution(sizes) {
    
  const nomalizedCard = sizes.map((card)=>{
     const [cardWidth,cardHeight] = card
     
     if(cardWidth<cardHeight){
         return [cardHeight, cardWidth]
     }
     return card
  })
  
  let maxWidth = nomalizedCard[0][0];
  let maxHeight = nomalizedCard[0][1];
  
  for( let i=0; i<nomalizedCard.length; i++){
          if(nomalizedCard[i][0] > maxWidth){
             maxWidth=nomalizedCard[i][0] 
          }
          if(nomalizedCard[i][1] > maxHeight){
              maxHeight=nomalizedCard[i][1]
          } 
  }
  
  return maxWidth*maxHeight;
}
// 1차 풀이


  