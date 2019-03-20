function shuffle(input){
	
	if(input === null || input.length === 0 || input.length === 1) return input;
	
	let idx = input.length - 1;
	while(idx >= 0){
		let randomIdx = Math.floor(Math.random() * (idx + 1));
		let randomVal = input[randomIdx];
		debugger;
		//Swap
		[input[idx], input[randomIdx]] = [input[randomIdx], input[idx]];
		idx--;
	}
	return input;
}

//shuffle([1,2,3,4,5]); 2,4,5,1,3