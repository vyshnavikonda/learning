function InsertionSort(input){
		
	let n = input.length;
	for(let i=1; i<=n-1; i++){
		let current = input[i];
		let pos = i;
		while(pos > 0 && input[pos-1] > current){
			input[pos] = input[pos-1];
			pos--;
		}
		input[pos] = current;
	}
	console.log(input);
}

//Input: [7,2,1,6,8,5,3,4]
//Console Output: [1,2,3,4,5,6,7]