const palindromes = function (str) {
  let str_ = str.toLowerCase();
  str_ = str_.replaceAll(/[ \.,!]/g, '');

  let left = 0;
  let right = str_.length - 1;

  while (left < right) {
    if (str_[left] != str_[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;

};

// Do not edit below this line
module.exports = palindromes;
