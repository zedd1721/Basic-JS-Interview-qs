/* -----------WRITE A JAVASCRIPT FUNCTION THAT CHECKS WHETHER A PASSED STRING IS PALINDROME OR NOT--------- */

function checkPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return reversed === str;
}

console.log(checkPalindrome("xerox"));
console.log(checkPalindrome("madam"));