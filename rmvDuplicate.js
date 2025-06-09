function removeDuplicateWords(sentence) {
    let words = sentence.split(" ");
    let unique = [...new Set(words)];
    return unique.join(" ");
}
