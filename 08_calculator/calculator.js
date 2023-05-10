const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  array.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function (array) {
  let product = array[0];
  array.forEach((num, index) => {
    if (index === 0) return;
    product *= num;
  });
  return product;
};

const power = function (a, b) {
  if (b === 0) return 1;
  let c = a;
  for (let i = 1; i < b; i++) {
    c *= a;
  }
  return c;
};

const factorial = function (a) {
  let b = 1;
  for (let i = 2; i <= a; i++) b *= i;
  return b;
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
