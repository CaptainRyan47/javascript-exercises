const sumAll = function (a, b) {
  let sum = 0;
  let bigNum = 0;
  let littleNum = 0;
  if (!(typeof a === 'number') || !(typeof b === 'number')) return 'ERROR';
  if (a < 0 || b < 0) return 'ERROR';
  if (a > b) {
    bigNum = a;
    littleNum = b;
  } else {
    bigNum = b;
    littleNum = a;
  }
  for (i = 0; i <= bigNum - littleNum; i++) {
    sum += littleNum + i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
