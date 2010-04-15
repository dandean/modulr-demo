var one = require('lib/one');

console.log("`one.value` in `two` is: " + one.value);

var Two = {
  stuff: function() {
    console.log("Method `two.stuff` invoked!");
  },

  things: 20,

  one: one.value.toUpperCase()
};

for (var k in Two) {
  exports[k] = Two[k];
}
