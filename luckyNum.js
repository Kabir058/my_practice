function isLuckyNumber(num) {
    if (typeof num !== "number" || num < 0) return false;

    let sum = 0;
    let digits = num.toString();
    for (let digit of digits) {
        sum += parseInt(digit);
    }
    return sum % 7 === 0;
}
