/*
* Problem : find all Sub array 
* Note: 1D Array
*
*/
function getSubArrays(arr) {
    const subArrays = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            subArrays.push(arr.slice(i, j + 1));    
        }
    }
    return subArrays;
}
console.log(getSubArrays([3, 3, 9, 9, 5]));
console.log(getSubArrays([3, 3, 9, 9, 5]).length);