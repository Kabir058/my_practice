function countVowels(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}
console.log(countVowels("Programming")); 
