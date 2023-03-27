function solution(money) {
    //money % 5500의 몫, money%5500 의 나머지
    let arr = [];
    arr = [parseInt(money / 5500), money % 5500];
    return arr;
}