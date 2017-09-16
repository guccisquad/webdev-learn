"use strict"
const N = 10;
var searchedValue;
var i;
var randomArr = [];
var isFound = false;
var output = "";

var searchedValue = prompt("Введите искомое число: ");
  if ( (searchedValue == "") || (isNaN (searchedValue) ) ) {
    alert("Error!");
  }
 
for(i = 1; i <= N; i++) {
  randomarr[i] = Math.floor(Math.random() * (10 - 1)) + 1;
  output = output + randarr[i] + "\n";
  if (randomarr[i] == searchedValue) {
    ok = true;
  }	
}

if (!ok) {
  output = output + "Цифры " + searchedValue + " нет";
 } else {
  output = output + "Есть цифра " + searchedValue; 
}
alert(output);
