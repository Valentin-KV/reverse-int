module.exports = function reverse (n) {
  let resN = Math.abs(n);
  const stringRes = String(resN).split('').reverse().join('');
  return +stringRes;
};
module.exports();