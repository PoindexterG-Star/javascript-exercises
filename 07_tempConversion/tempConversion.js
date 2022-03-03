const ftoc = function(temp) {
  let c = (temp - 32) * 0.55;
  return parseFloat(c.toFixed(1));
};

const ctof = function(temp) {
  let d = temp * 1.8 +32;
  return parseFloat(d.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
