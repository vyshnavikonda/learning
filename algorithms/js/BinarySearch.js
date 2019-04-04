function BinarySearch(input, element){
	let start = 0, end = input.length - 1;
	while(start <= end){
		let mid = Math.floor(start + (end - start) / 2);
		if(element === input[mid] ){
			return mid;
		} else if(element < input[mid]){
			end = mid - 1;
		} else{
			start = mid + 1;
		}
	}
	return -1; //Not found
}

//BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20)
//Output: 19
//BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 0)
//Output: -1