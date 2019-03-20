function shuffle(input){
	
	if(input === null || input.length === 0 || input.length === 1) return input;
	
	input = input.split("");

	let idx = 0;
	while(idx <= input.length - 1){
		let randomIdx = Math.floor(Math.random() * idx + 1);
		let randomVal = input[randomIdx];
		debugger;
		//Swap
		[input[idx], input[randomIdx]] = [input[randomIdx], input[idx]];
		idx++;
	}
	input = input.join("");
	
	return input;
}

//shuffle("Hello World"); Output: "elW odollrH"