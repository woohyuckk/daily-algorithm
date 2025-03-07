function solution(n, lost, reserve) {
  // 1. 여벌 체육복이 있지만 도난당한 학생을 먼저 제외
  let realLost = lost.filter(l => !reserve.includes(l));
  let realReserve = reserve.filter(r => !lost.includes(r));

  // 2. 오름차순 정렬 (체육복을 앞뒤로 빌려줄 수 있도록 정리)
  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  // 3. 체육복 빌려주기 로직
  let count = n - realLost.length; // 처음에는 체육복이 있는 학생 수

  realLost.forEach((lostStudent) => {
    let index = realReserve.findIndex(
      (r) => r === lostStudent - 1 || r === lostStudent + 1
    );

    if (index !== -1) {
      count++; // 체육복을 빌려줬으므로 체육수업을 들을 수 있는 학생 증가
      realReserve.splice(index, 1); // 해당 여벌 체육복을 사용했으므로 제거
    }
  });

  return count;
}
