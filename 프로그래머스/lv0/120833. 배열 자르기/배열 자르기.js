function solution(numbers, num1, num2) {
    let answer = [];
    // num1 ~ num2 까지만 출력
    // 
    
    answer = numbers.slice(num1,num2+1);
    return answer;
}