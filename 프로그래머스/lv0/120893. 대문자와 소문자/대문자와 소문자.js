function solution(my_string) {
    let answer = '';
    let stringArray = my_string.split('');
    for (let i of stringArray) {
        answer += i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase();
    }
    return answer;
}