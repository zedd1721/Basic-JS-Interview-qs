/*--Write a JavaScript function that accepts a string as a parameter and converts the forst letter of each word of string
in upper case------- */

function capitalizeFirstword(str){
    let newstr = str.split(" ").map((word) => {
       return word.charAt(0).toUpperCase()+word.substring(1);
    })
    return newstr.join(" ");
}

console.log(capitalizeFirstword("my name is zain shaikh"));