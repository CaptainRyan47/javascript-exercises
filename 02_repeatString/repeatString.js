const repeatString = function(string, num) {
  let rString = '';
  if (num < 0) return 'ERROR';
  for (let i = 0; i < num; i++) {
    rString = rString + string;
  };
  return rString;
};

// Do not edit below this line
module.exports = repeatString;
