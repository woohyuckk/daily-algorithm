function solution(s) {

  let count = 0;

  for (const char of s) {
    if (char === ")") count--;
    if (char === "(") count++;
    if (count < 0) return false
  }

  return count === 0
}


/*
아이디어:

) : -1,
) : +1,

음수가 되는 순간 false 반환

*/