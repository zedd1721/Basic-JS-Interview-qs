/*-----Make this Work ----*/
//duplicate([1, 2, 3, 4, 5]);  --> [1,2,3,4,5,1,2,3,4,5]

//1st approach
function duplicate(arr){
    return arr.concat(arr);
}

console.log(duplicate([6,7,8,9,10]));

//2nd Approach
// let arrA = [1,2,3,4,5];
// let arrB = arrA;
// console.log(arrA+","+arrB);