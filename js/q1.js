'use strict'
var array1=[1,2,3,4,5,6,7]; //putthe array you want
var number1=2; // put the number you want 
var count=0; // dont change this value
function greaterthan(array,number){
for (var i = 0; i < array.length; i++) {
    if (array[i] > number){ 
    count=count+1;
    };
}return  count;
} ;
greaterthan(array1,number1);
console.log(count);
