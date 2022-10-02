const round = function (num) {
  return parseFloat(num.toFixed(1));
}

const ftoc = function (f) {
  let c = (f - 32) * 5 / 9;
  return round(c);
};

const ctof = function (c) {
  let f = (c * 9 / 5) + 32;
  return round(f);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
