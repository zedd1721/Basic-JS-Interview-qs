//Given a string, reverse each word in the sentence

const str = "Hi my name is Zain Shaikh";

let strArr = str.split(" "); //it splits the String on the basis on " " and created a array
//Ex:- string: "Hello World"  --> Array ['Hello' , ''World'];


let updatedArr =  strArr.map(function(word){
    return word.split("").reverse().join("");
})

console.log(updatedArr.join(" "));
// console.log();
