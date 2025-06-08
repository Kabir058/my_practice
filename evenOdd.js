function isEvenOrOdd(num) {
    if (typeof num !== 'number') {
        return "Invalid Input";
    }
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isEvenOrOdd(9));  
console.log(isEvenOrOdd(12));  