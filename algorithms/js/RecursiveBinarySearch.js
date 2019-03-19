function RecursiveBinarySearch(input, element, start, end){

	if(start > end) return -1;
	if(!input.length || !element) return;
	
	if(!start && !end){
		start = 0;
		end = input.length - 1;
	}
	let mid = Math.floor(start + (end - start) / 2);
	if(element === input[mid]) return mid;
	else if(element < input[mid]){
		return RecursiveBinarySearch(input, element, start, mid - 1);
	} else{
		return RecursiveBinarySearch(input, element, mid + 1, start);
	}
}

//RecursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5)
//Output: 4