function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function solution(n) {
    const pizza = 6; // 고정된 피자 조각 수
    return (n * pizza) / gcd(n, pizza)/6;
}