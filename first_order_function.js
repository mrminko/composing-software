//which doesn't accept or return function

const filter_length_4 = words => {
    const filtered = [];
    for (let i = 0, {length} = words; i < length; i++) {
        const word = words[i]
        if (word.length !== 4) {
            filtered.push(word);
        }
    }
    return filtered;
}

const words = ["mgmg", "mgmya", "mghla", "mama"]
let {length: count} = words; //cool
let {length} = words;
console.log(count);
console.log(filter_length_4(words));