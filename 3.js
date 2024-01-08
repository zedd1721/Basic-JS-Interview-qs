/*--------------HOW TO EMPTY AN ARRAY IN JAVASCRIPT ----------------*/

// Do not reset it to a new array, and do not loop through to pop each value 


let array = [1,2,3,4,5,6,7,8,9,0];
console.log("Array: ",array);

array.length = 0;
console.log("Array after emptying: ",array);
