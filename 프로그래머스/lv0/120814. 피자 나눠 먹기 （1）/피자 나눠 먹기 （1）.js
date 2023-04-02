function solution(n) {
    let answer = 0;
    //피자 1판에 7조각
    // n 입력하면 
    if (n % 7 === 0) {
        return n / 7;
    } else {
        return Math.floor(n / 7 + 1);
    }
    return answer;
}