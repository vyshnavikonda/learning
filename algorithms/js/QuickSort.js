function QuickSort(input){

	let n = input.length;
	let start = 0, end = n-1;
	sort(input, start, end);	
	console.log(input);
}

function sort(input, start, end){
	
	if(start >= end) return;
	
	let pivotIdx = partition(input, start, end);
	sort(input, start, pivotIdx - 1);
	sort(input, pivotIdx + 1, end);
}

function partition(input, start, end){
	let pivot = input[end];
	let pIdx = start;
	for(let i=start; i<=end; i++){
		if(input[i] < pivot){
			[input[i], input[pIdx]] = [input[pIdx], input[i]];
			pIdx++;
		}
	}
	[input[pIdx], input[end]] = [input[end], input[pIdx]];
	return pIdx;
}

//Input: [7,2,1,6,8,5,3,4]
//Console Output: [1,2,3,4,5,6,7]