const linkedList = require('../dist').default;

const VALUES = {
  A: 'A',
  B: 'B',
  C: 'C',
};

const list = linkedList([
  VALUES.A,
  VALUES.B,
  VALUES.C,
]);

console.log(list.shift());
