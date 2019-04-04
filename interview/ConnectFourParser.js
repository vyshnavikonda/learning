function parseConnectFour(input){
	let parsed = [];
	let finalString = "";
	for(let i = 0; i < input.length; i++){
		let num = 1;
		let current = input.charAt(i);
		let next = input.charAt(i + 1);
		//Char is a number
		if(current !== 'r' && current !== 'b' && current !== '-'){
			num = input.charAt(i);
			
			if(next !== 'r' && next !== 'b' && next !== '-'){
				num += next;
				i += 1;
				next = input.charAt(i + 1);
            }
			i += 1;
			current = next;
		}
		num = parseInt(num);
		for(let j = 0; j < num; j++){
			finalString += current;	
		}		
		
	}
	
	let temp = [];
	for(let k = 0; k <= 42; k++){
		if(k % 7 === 0){
			parsed.push(temp);
			temp = [];
		}
		temp.push(finalString.charAt(k));
	}
	parsed.shift();
	return parsed;

}

/*

parseConnectFour("10-3b3r-bbrr-5-8b--rbrbr")

0: (7) ["-", "-", "-", "-", "-", "-", "-"]
1: (7) ["-", "-", "-", "b", "b", "b", "r"]
2: (7) ["r", "r", "-", "b", "b", "r", "r"]
3: (7) ["-", "-", "-", "-", "-", "-", "b"]
4: (7) ["b", "b", "b", "b", "b", "b", "b"]
5: (7) ["-", "-", "r", "b", "r", "b", "r"]


*/