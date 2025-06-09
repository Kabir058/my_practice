function countVowels(word) {
    if (typeof word !== "string") return "Invalid Input";
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of word) {
        if (vowels.includes(char)) count++;
    }

    return count;
}
