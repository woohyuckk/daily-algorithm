function solution(priorities, location) {

  let queue = priorities.map((priority, idx)=>({priority,idx}));
  let executionOrder = 0;
  
  
  while (queue.length>0){
      let current = queue.shift();
      
      if(queue.some(job=> job.priority > current.priority)){
          queue.push(current)
      }
      else{
          executionOrder++;
          if(current.idx === location) return executionOrder;
      }            
  }         
}