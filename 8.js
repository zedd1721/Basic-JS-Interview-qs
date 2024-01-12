/* ----WRITE A JAVASCRIPT FUNCTION THAT RETURNS A PASSED STRING WITH LETTERS IN ALPHABETICAL ORDER----- */

function alphabeticalOrder(str){
    let order = str.split("").sort().join("");
    
    return order;
}
console.log(alphabeticalOrder("ZainShaikh"));