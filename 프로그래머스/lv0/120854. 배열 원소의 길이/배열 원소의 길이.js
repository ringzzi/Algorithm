function solution(strlist) {
    let answer = [];
    // 반복문 돌면서 [i]번째 인덱스 -> 길이 넣어주기
    for(let i = 0; i < strlist.length; i++) {
        answer.push(strlist[i].length);
    }
    return answer;
}