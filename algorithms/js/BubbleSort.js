function BubbleSort(input){
	
	let n = input.length;
	let flag = 0;
	for(let i=0; i<=n-1; i++){
		for(j=0; j<=n-i-1; j++){
			if(input[j] > input[j+1]){
				[input[j], input[j+1]] = [input[j+1], input[j]];
				flag = 1;
			}
		}
		if(flag === 0) break;
	}
	console.log(input);
}

//Input: [7,2,1,6,8,5,3,4]
//Console Output: [1,2,3,4,5,6,7]