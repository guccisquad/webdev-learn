"use strict"
const N = 10;
var find;
var i;
var arr = [];
var ok = false;
var out = "";

var find = prompt("Введите искомое число: ");
  if ( (find == "") || (isNaN (find) ) ) {
    alert("Error!");
  }
 
for(i = 1; i <= N; i++) {
  arr[i] = Math.floor(Math.random() * (10 - 1)) + 1;
  out = out + arr[i] + "\n";
  if (arr[i] == find) {
    ok = true;
  }	
}

if (!ok) {
  out = out + "Цифры " + find + " нет";
 } else {
  out = out + "Есть цифра " + find; 
}
alert(out);
