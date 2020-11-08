const hasSameBeginning = (originalString, substr, i) => {
    for (let j = 0; j < i + substr.length; j++) {
        return originalString.charAt(i + j) === substr.charAt(j)
    }
}
const indexOf = (originalString, substr = '', index = 0) => {
    if (index < 0 || index > originalString.length) {
        console.log('index must be positive and as big as the string length');
        return -1;
    }
    if (substr.length + index > originalString.length) {
        return -1;
    }
    for (let i = index; i < originalString.length; ++i) {
        if (i + substr.length <= originalString.length) {
            if(hasSameBeginning(originalString, substr, i)){
                return i;
            }
        }
    }
    return -1;
}
console.log(indexOf('pepino', 'epi', 0));
console.log(indexOf('pepino', 'epi', 2));
console.log(indexOf('pepino', 'epi', 23));
console.log(indexOf('pepino', 'epi', -1));
console.log(indexOf('pepino', 'ino', 0));