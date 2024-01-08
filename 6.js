/*-------Write a JavaScript Function to reverse a number*/

// 1st Approach
// function reverseNum(n){
//     let strNum = n.toString();
//     return strNum.split("").reverse().join("");
// }

// const ans = parseInt(reverseNum(987654321));

// console.log(ans);

//2nd Approach

function reverseNum(num){
    let rev = 0;
    while(num>0){
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor((num /10));
    }
    return rev;
}

console.log(reverseNum(98765));