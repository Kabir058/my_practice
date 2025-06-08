function reverseString(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    return str.split('').reverse().join('');
}
console.log(reverseString("Kabir")); 
