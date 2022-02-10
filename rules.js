var output = document.getElementById("SelectValue");
var N1 = document.getElementById("N1");
var N2 = document.getElementById("N2");
var N3 = document.getElementById("N3");

var slider = (document.getElementById("slider").oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;

  var color =
    "linear-gradient(90deg, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%)" +
    value +
    "%, hsl(229, 57%, 11%) 0%)";

  this.style.background = color;

  output.innerHTML = this.value;

  var num = this.value;
  var resultado = 1000 - num;
  var i = 0;
  var digits = [];
  while (resultado > 0) {
    digits.push(resultado % 10);
    resultado = parseInt(resultado / 10);
  }

  while (i < 3) {
    if (digits[i] == undefined) {
      digits[i] = 0;
    }
    i++;
  }

  N1.innerHTML = digits[2];
  N2.innerHTML = digits[1];
  N3.innerHTML = digits[0];
});
