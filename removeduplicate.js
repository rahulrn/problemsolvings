/*
* Problem : Remove Duplicate from array
* note : 1D Array and case insensitive 
*
*/
 function removedumplicate(array){
 	let uniqueArray = [...new Set(array)];
 	return uniqueArray;
 }
 console.log(removedumplicate([1,2,3,4,1,3,4]));
 console.log(removedumplicate(["Mike","John","Sara","Albert","John"]));