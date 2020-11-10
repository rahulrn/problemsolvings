/*
* Problem : Find unique pairs of sum in array of unsorted array. e.g - array a[]= [4,3,1,2,5] printpairs whose sum is 5. answer = (4,1), (3,2)
*
*/
function finduniquesum(arr,sum){
	const result = [];
	for(let i=0;i<arr.length;i++){
		let diff = sum - arr[i];
		if(arr[i] < sum && arr.indexOf(diff) > 0 && arr.indexOf(diff) > i){
			result.push([arr[i],sum-arr[i]]);
		}
	}
	return result;
}

console.log(finduniquesum([4,3,1,2,5],5));
