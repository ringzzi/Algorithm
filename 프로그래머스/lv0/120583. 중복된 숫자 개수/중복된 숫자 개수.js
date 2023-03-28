function solution(array, n) {
    // array 에 n이 몇 개 있는 지
    let result = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i] === n) {
            result ++;
        }
    }
    return result;
}