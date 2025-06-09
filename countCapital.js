function countCapitalLetters(str) {
    let count = 0;
    for (let ch of str) {
        if (ch >= 'A' && ch <= 'Z') {
            count++;
        }
    }
    return count;
}
