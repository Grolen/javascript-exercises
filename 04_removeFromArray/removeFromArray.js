const removeFromArray = function(array, ...args) {
    const arrayOfArgs = [...args];
    for (let i = 0; i < arrayOfArgs.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] === arrayOfArgs[i]) {
                array.splice(j, 1);
                j--;
            }
        }  
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
