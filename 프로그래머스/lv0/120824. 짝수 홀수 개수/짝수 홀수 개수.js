function solution(num_list) {
    let even_length = num_list.filter(n => n % 2 === 0).length;
    return [even_length, num_list.length - even_length];
}