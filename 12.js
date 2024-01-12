/*---In an arrray of numbers and string only add those members which are not string ---- */

let arr = ["zain", 23, "Shaikh", 90,"name", 80];
let sum =0;
arr.forEach((elem)=>{
    if(typeof elem === 'number'){
        sum += elem;
    }
})

console.log(sum);