function filterNumbers(str) {
    return str
        .split(" ")
        .map(word => parseInt(word))
        .filter(num => !isNaN(num));
}
