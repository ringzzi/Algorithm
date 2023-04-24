function solution(num_list, n) {
    //  n = 1 num_list[0]  n = 2 num_list[0,1]
    return num_list.slice(0, n)
}