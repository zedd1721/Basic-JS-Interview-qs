//Given a string, reverse each word in the sentence

const str = "Hi my name is Zain Shaikh";

let strArr = str.split(" "); //it splits the String on the basis on " " and created a array
//Ex:- string: "Hello World"  --> Array ['Hello' , ''World'];


let updatedArr =  strArr.map(function(word){
    return word.split("").reverse().join("");

    //word.split("") --> it will split the word into array.
    //EX:- Array ['Hello' , ''World']
    //on 0th index we have "Hello", it will spilt to array [H,e,l,l,o].

    // .reverse() --> it will reverse the array.
    //EX:- Array [H,e,l,l,o] --> [o,l,l,e,H]

    // .join("") --> it will join the array to single string without space
    // EX:- Array [o,l,l,e,H] --> "olleH"
})

// Now we have reversed array ["olleh", "dlroW"].

console.log(updatedArr.join(" "));
// .join(" ") -->it will join the arary with spaces
// EX:- olleh dlroW
// NOW WE HAVE REVERSED STRING
