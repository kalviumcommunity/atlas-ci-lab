// Tiny pure utility functions used by the CI lab.
function add(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

function formatName(first, last) {
  return `${first} ${last}`.trim();
}

var module = module.exports = { add, isEven, formatName };
