"use strict"
const N = 9;
var searchedValue;
var i;
var randomArr = [];
var isFound = false;
var output = "";

for(i = 0; i <= N; i++) {
  randomArr[i] = Math.floor(Math.random() * (16 - 1)) + 1;
  output = output + randomArr[i] + "\n";
}

var searchedValue = prompt("Введите искомое число: ");
  if ( (searchedValue == "") || (isNaN (searchedValue) || (searchedValue == null) ) ) {
    alert("Error!");
    windows.stop;
  }
 
for(i = 0; i <= N; i++) {  
  if (randomArr[i] == searchedValue) {
    isFound = true;
  }	
}

if (!isFound) {
  output = output + "Цифры " + searchedValue + " нет";
 } else {
  output = output + "Есть цифра " + searchedValue; 
}
alert(output);
