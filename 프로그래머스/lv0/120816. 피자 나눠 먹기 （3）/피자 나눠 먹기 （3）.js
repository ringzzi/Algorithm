// 피자 2~12조각까지 잘라줌
// 몇 판 시켜야 하는지 리턴 
function solution(slice, n) {
    let answer = 0;
    if (n % slice === 0) {
        return n / slice; 
    } else {
        return Math.floor(n / slice + 1);
    }
    return answer;
}