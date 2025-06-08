function isLeapYear(year) {
    if (typeof year !== 'number') {
        return "Invalid Input";
    }
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2024)); 
console.log(isLeapYear(2100)); 
