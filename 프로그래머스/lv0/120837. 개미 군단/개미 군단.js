function solution(hp) {
    // 장군개미 5, 병정개미 3, 일개미 1
    // 
    let janggoon = Math.floor(hp / 5);
    let bungjung = Math.floor((hp - janggoon * 5) / 3);
    let il = hp - janggoon * 5 - bungjung * 3;
    return janggoon + bungjung + il
    
}