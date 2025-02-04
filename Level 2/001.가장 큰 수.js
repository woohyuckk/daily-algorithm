function solution(numbers) {
    let answer = numbers.map(String).sort((a,b)=> (b+a)-(a+b));
    
    if(answer[0]==="0") {return "0"}
    
    return answer.join('');
}




// 앞자리 수가 큰 순서대로 줄세우기
// 같은 앞자리수 인경우 그 다음자리 숫자가 큰 순서, 단 3000 처럼 0인경우 3보다 작게 와야한다.
// 문자열로 변경후 문자열 결합(concat)을 이용하여 순서정렬
// ex) a="3", b="30"일 때 (b+a)-(a+b) = "303" -"330" = 형변환 되어 -27
// sort가 음수이면 첫번째 인자(a)가 두번째 인자(b)보다 앞에 와야한다. 3  30
// 11번 케이스 실패
// 모든 값이 0 일 경우를 생각해서 Math.max(answer)==='0' 일경우 return '0'을 사용했지만
// Math.max는 안의 값들을 숫자형으로 변환해서 비교하기 때문에 '0'과 비교하면 false가 발생한다. 