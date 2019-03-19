function FindRotations(input){
	debugger;
	let n = input.length;
	let start = 0, end = n - 1;
	while(start <= end){
		//Case 1
        if(input[start] <= input[end]) return start;
        //Case 2
        let mid = Math.floor(start + end / 2);
        let next = (mid + 1) % n;
        let prev = (mid + n - 1) % n;
		if(input[mid] <= input[next] && input[mid] <= input[prev]) return mid;
		//Case 3
		else if(input[mid] <= input[end]) end = mid - 1;
		else if(input[mid] >= input[start]) start = mid + 1;
	}
	return -1;
}

//FindRotations([15,22,23,28,31,38,5,6,8,10,12]); Output: 6