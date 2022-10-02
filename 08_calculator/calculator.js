const add = function(a, b) {
  if (typeof(a) != 'number' || typeof(b) != 'number') {
    return 'ERROR';
  }

  return a + b;
};

const subtract = function(a, b) {
  if (typeof(a) != 'number' || typeof(b) != 'number') {
    return 'ERROR';
  }

  return a - b;
};

const sum = function(arr) {
  if (!Array.isArray(arr)) {
    return 'ERROR';
  }

  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
  
};

const multiply = function(arr) {
  if (!Array.isArray(arr)) {
    return 'ERROR';
  }

  if (arr.length === 0) {
    return 0;
  }

  let product = 1;
  for (let i = 0; i < arr.length; i++) {
     product = product * arr[i];
  }

  return product;
};

const power = function(a, b) {
	  if (typeof(a) != 'number' || typeof(b) != 'number') {
    return 'ERROR';
  }

  return Math.pow(a, b);
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
