const removeFromArray = function(array, nDelete) {
    let a = array.indexOf(nDelete);
    let removed = array.splice(a, 1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
