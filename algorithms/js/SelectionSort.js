function SelectionSort(input){
	let iMin, iMinIdx;
	let n = input.length;
	
	for(let i=0; i<=n-1; i++){
		iMin = input[i];
		iMinIdx = i;
		for(let j=i+1; j<=n-1; j++){
			if(iMin > input[j]){
				iMin = input[j];
				iMinIdx = j;
			}
		}
		if(i !== iMinIdx)[input[i], input[iMinIdx]] = [input[iMinIdx], input[i]];
	}
	console.log(input);
}

//Input: [7,2,1,6,8,5,3,4]
//Console Output: [1,2,3,4,5,6,7]