function reduceArr(array, callbackFn, accumulator){
	
	for(let i in array){
		accumulator = callbackFn(accumulator, array[i]);	
	}
	return accumulator;
}
function sumFn(accumulator, next){
	return accumulator + next;
}
function maxFn(accumulator, next){
	return Math.max(accumulator, next);
}
function minFn(accumulator, next){
	return Math.min(accumulator, next);
}


//reduceArr([1,2,3,4,10,-1], sumFn, 0); Output: 19
//reduceArr([1,2,3,4,10,-1], maxFn, 0); Output: 10
//reduceArr([1,2,3,4,10,-1], minFn, 0); Output: -1