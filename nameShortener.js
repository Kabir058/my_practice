function shortenName(fullName) {
    let words = fullName.trim().split(" ");
    if (words.length === 0) return "";

    let result = words[0];
    for (let i = 1; i < words.length; i++) {
        result += ` ${words[i][0].toUpperCase()}.`;
    }
    return result;
}
