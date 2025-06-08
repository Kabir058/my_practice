function sumOfPositive(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}
console.log(sumOfPositive([1, -3, 5, 6, -2])); 
