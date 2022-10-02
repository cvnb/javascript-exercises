const palindromes = function (str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;

};

// Do not edit below this line
module.exports = palindromes;
