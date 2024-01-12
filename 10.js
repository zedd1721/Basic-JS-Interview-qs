/*---Write a JavaScript function to get the number of occurences of each letter in specified string---- */

function occ(str){
    let occurences ={};
    str.split('').forEach(element => {
        if (occurences.hasOwnProperty(element) === false) {
            occurences[element] = 1;
        } else {
            occurences[element]++;
        }
    });
    return occurences;
}

console.log(occ('shaikh'));