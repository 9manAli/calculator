var b = document.getElementsByClassName("value")[0];
document.getElementsByClassName("num")[0].style.background = "red";
function nul() {
  b.value = " ";
}
function num1() {
  b.value += 1;
}
function num2() {
  b.value += 2;
}
function num3() {
  b.value += 3;
}
function num4() {
  b.value += 4;
}
function num5() {
  b.value += 5;
}
function num6() {
  b.value += 6;
}
function num7() {
  b.value += 7;
}
function num8() {
  b.value += 8;
}
function num9() {
  b.value += 9;
}
function num0() {
  b.value += 0;
}
function add() {
  b.value += "+";
}
function minus() {
  b.value += "-";
}
function multiply() {
  b.value += "*";
}
function divide() {
  b.value += "/";
}
function equal() {
  b.value = eval(calc.txt.value);
}
