function solution(numbers) {
    let answer = 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return answer = sum / numbers.length;
}