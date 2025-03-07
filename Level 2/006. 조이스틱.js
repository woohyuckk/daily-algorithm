function solution(name) {
  const n = name.length;
  let answer = 0;
  let minMove = n - 1;
  
  for (let i = 0; i < n; i++) {
    // 현재 문자에 대한 세로 이동 횟수 계산
    const charCode = name.charCodeAt(i);
    const upDown = Math.min(charCode - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - charCode + 1);
    answer += upDown;
    
    // 오른쪽으로 이동하면서 연속된 'A'가 시작되는 위치 찾기
    let next = i + 1;
    while (next < n && name[next] === 'A') {
      next++;
    }
    
    // 현재 인덱스 i까지 오른쪽 이동하고, 
    // 나머지 부분(연속된 'A' 이후)의 위치로 돌아오기 위한 이동 횟수를 계산
    // 두 가지 경우 중 최소 이동 횟수를 선택
    minMove = Math.min(minMove, i + n - next + Math.min(i, n - next));
  }
  
  answer += minMove;
  return answer;
}
