function solution(array, height) {
    const toller = array.filter(n => n > height)
    return toller.length;
}