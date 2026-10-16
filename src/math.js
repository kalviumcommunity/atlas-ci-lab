
function add(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

function formatName(first, last) {
  return `${first} ${last}`;
}

module.exports = { add, isEven, formatName };
