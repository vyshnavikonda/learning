function FindOccurrences(input, element){

	if(!input.length || !element) return -1;
	let lastIdx = BinarySearch(input, element, false);
	let firstIdx = BinarySearch(input, element, true);
	if(firstIdx === -1) return 0;
	else return (lastIdx - firstIdx + 1);
}

function BinarySearch(input, element, isFirst){
    let rIdx = -1;
    let low = 0, high = input.length - 1;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        if(element === input[mid]){
			rIdx = mid;
            isFirst ? high = mid - 1 : low = mid + 1;
        } else if(element <= input[mid]){
            high = mid - 1;	
        } else{
			low = mid + 1;
		}
    }
	return rIdx;
}

//FindOccurrences([2, 4, 10, 10, 10, 10, 18, 20], 20) Output: 1
//FindOccurrences([2, 4, 10, 10, 10, 10, 18, 20], 10) Output: 4
//FindOccurrences([2, 4, 10, 10, 10, 10, 18, 20], 5) Output: 0