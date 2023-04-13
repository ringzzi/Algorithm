function solution(s1, s2) {
    // 두 배열을 비교를 해. 그 다음에 같은게 있으면? 반환
    let result = 0;
    for (i of s1) {
        for (j of s2) {
            if(i === j) result = result + 1;
        }
    }
    return result;
}