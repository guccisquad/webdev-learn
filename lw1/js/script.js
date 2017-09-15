"use strict"
const N = 10;
var k;
var i;
var arr = [];
var z = 1;
var write = "";

var k = prompt("Введите искомое число: ");
  if ((k == "") || (isNaN(k))) {
	alert("Error!");
  }
 
for(i = 1; i <= N; i++) {
  arr[i] = Math.floor(Math.random() * (10 - 1)) + 1;
  write = write + arr[i] + "\n";
  if (arr[i] == k) {
    z = 2;
  }	
}

if (z == 2) {
  write = write + "Есть цифра " + k;
} else {
  write = write + "Цифры " + k + " нет";
}
alert(write);
