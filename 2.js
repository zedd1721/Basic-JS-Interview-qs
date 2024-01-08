/*--------------------HOW TO CHECK IF AN OBJECT IS AN ARRAY OR NOT?---------------*/

function checkArray(elem){
    return Array.isArray(elem); //isArray() is a method that checks whether the element is array or not based on the syntax literals
}

console.log(checkArray([]));
console.log(checkArray({}));