const repeatString = function (text, count) {
    if (count < 0) {
        return 'ERROR';
    };

    if (text == '') {
        return '';
    };
    
    return text.repeat(count);

};

// Do not edit .repeat()below this line
module.exports = repeatString;
