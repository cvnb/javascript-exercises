const repeatString = function (string, count) {
    if (count < 0) {
        return 'ERROR';
    };

    if (string == '') {
        return '';
    };
    
    let result = '';
    for (let i = 0; i < count; i++) {
        result = result + string;
    }

    return result;

};

// Do not edit below this line
module.exports = repeatString;
