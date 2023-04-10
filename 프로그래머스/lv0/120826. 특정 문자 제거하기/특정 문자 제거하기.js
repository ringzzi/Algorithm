function solution(my_string, letter) {
    // letter 기준으로 분할, join으로 합침
    return my_string.split(letter).join('')
}