function getWords(sentence) {
    if (typeof sentence !== "string") return "Invalid Input";

    return sentence
        .split(/\s+/)
        .filter(word => word.length > 3)
        .map(word => word.replace(/[^a-zA-Z]/g, ''));
}
