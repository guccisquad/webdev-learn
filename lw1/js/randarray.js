"use strict"
const N = 10;
var searchedValue;
var i;
var randomArr = [];
var isFound = false;
var output = "";

for(i = 1; i <= N; i++) {
  randomArr[i] = Math.floor(Math.random() * (10 - 1)) + 1;
  output = output + randomArr[i] + "\n";
}

var searchedValue = prompt("Введите искомое число: ");
if ( (searchedValue == "") || (isNaN (searchedValue) ) ) {
  alert("Error!");
}
 
for(i = 1; i <= N; i++) {  
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
