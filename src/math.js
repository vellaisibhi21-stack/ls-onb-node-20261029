const _ = require('lodash');
function sum(xs) { return _.sum(xs); }
function mean(xs) { return xs.length ? sum(xs) / xs.length : 0; }
module.exports = { sum, mean };
module.exports.max = (xs) => (xs.length ? Math.max(...xs) : undefined);
