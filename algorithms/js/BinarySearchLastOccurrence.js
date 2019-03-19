function BinarySearchLastOccurrence(input, element){
    
    let start = 0, end = input.length - 1;
    let rIdx = -1
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        if(element === input[mid] ){
            rIdx = mid;
            start = mid + 1;
        } else if(element < input[mid]){
            end = mid - 1;
        } else{
            start = mid + 1;
        }
    }
    return rIdx; //Not found
}

//BinarySearchFirstOccurrence([2, 4, 10, 10, 10, 18, 20], 10)
//Output: 4