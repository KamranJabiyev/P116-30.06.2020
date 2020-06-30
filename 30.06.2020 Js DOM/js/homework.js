function CharCount(str) {
    let obj = {};
    for (const letter of str) {
        if (obj[letter] === undefined) {
            obj[letter] = 1;
        } else {
            obj[letter]++;
        }
    }
    return obj;
}

console.log(CharCount("KamraZ"))