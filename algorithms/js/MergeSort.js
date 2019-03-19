function MergeSort(input){
	
	let n = input.length;
	if(n < 2) return;
	debugger;
    let mid = Math.floor(n / 2);
    let left = [], right = [];
    for(var i=0; i<=mid-1; i++){
        left[i] = input[i];
    }
    for(var j=mid; j<=n-1; j++){
        right[j-mid] = input[j];
    }
    MergeSort(left);
    MergeSort(right);
    merge(left, right, input);
	console.log(input);
    
}

function merge(left, right, input){
    let i = 0, j = 0, k = 0;
    let lLen = left.length, rLen = right.length;

	while(i < lLen && j < rLen){
		if(left[i] <= right[j]){
            input[k] = left[i];
            i++;
        } else{
            input[k] = right[j];
            j++;
        }
		k++;
	}
	while(i < lLen){
		//Processing left overs in Left array
		input[k] = left[i];
		i++;
		k++;
	}
	while(j < rLen){
		//Processing left overs in right array
		input[k] = right[j];
		j++;
		k++;
	}

};


//Input: [7,2,1,6,8,5,3,4]
//Console Output: [1,2,3,4,5,6,7]