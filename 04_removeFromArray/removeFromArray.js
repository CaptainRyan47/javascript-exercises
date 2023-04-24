const removeFromArray = function (array, ...args) {
  const arrayLength = array.length;
  const argsLength = args.length;
  for (let i = 0; i < argsLength; i++) {
    for (let f = arrayLength - 1; f >= 0; f--) {
      if (array[f] === args[i]) array.splice(f, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
