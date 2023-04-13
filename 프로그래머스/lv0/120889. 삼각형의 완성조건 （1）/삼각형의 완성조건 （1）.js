function solution(sides) {
   // for 문 돌려서 sides , 나머지 두 개 합 보다 작아야함..
    let result = 0;
    sides.sort((a, b) => a - b);
        let sum = sides[0] + sides[1];
        if (sum > sides[2]) {
           return 1;
            } 
    return 2;
    
}