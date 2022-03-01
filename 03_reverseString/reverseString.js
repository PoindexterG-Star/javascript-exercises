const reverseString = function(string) {
    let a = string.split("");
    let b = a.reverse();
    let c = "";
    for (let i = 0; i < b.length; i++) {
        c += b[i];
    }
    return c;
};

// Do not edit below this line
module.exports = reverseString;
