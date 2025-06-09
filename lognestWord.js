function findLongestWord(text) {
    let words = text.match(/\b\w+\b/g);
    return words.reduce((longest, current) => 
        current.length > longest.length ? current : longest, "");
}
