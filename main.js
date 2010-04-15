var
  one = require('lib/one'),
  two = require('lib/two'),
  three = require('lib/three');

console.log("`one.value` in `main`: " + one.value);

two.stuff();

console.log("`two.things` in `main`: " + two.things);

console.log("`two.one` in `main`: " + two.one);