const fibonacci = function(a) {
  if (a < 0) return 'OOPS';
  let fibSeq = [1,1];
  for (let i = 2; i < a; i++) {
    fibSeq[i] = fibSeq[i-1] + fibSeq[i-2];
  }
  return fibSeq[a-1];
};

// Do not edit below this line
module.exports = fibonacci;
