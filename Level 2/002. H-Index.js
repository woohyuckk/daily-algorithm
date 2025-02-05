
function solution(citations) {
    // 내림차순 정렬: 인용 횟수가 큰 논문부터 확인
    citations.sort((a, b) => b - a);
    
    let hIndex = 0;
    for (let i = 0; i < citations.length; i++) {
        // i는 0부터 시작하므로 논문의 개수는 i+1
        if (citations[i] >= i + 1) {
            hIndex = i + 1;
        } else {
            // 조건을 만족하지 않으면 더 이상 후보가 될 수 없으므로 종료
            break;
        }
    }
    
    return hIndex;
}



// citiations 의 길이 = 발표한 논문의 수
// 해당 논문의 인용수와 갯수가 같으면 H-index
// 인용수가 높은만큼 발표된 논문수가 같이 늘어난다

