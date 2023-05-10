const palindromes = function (string) {
  string = string.toLowerCase();
  let stringArray = string.split('');
  let cleanedArray = [];
  stringArray.forEach((char) => {
    if (char === "'" || char === '"' || char === ',' || char === '.'
      || char === '!' || char === '?' || char === ' ') return;
    else cleanedArray.push(char);
  });
  let rArray = [...cleanedArray];
  rArray.reverse();
  return rArray.toString() === cleanedArray.toString();
};

// Do not edit below this line
module.exports = palindromes;
