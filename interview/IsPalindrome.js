function isPalindrome(input){

	if(!input) return false;
	if(input.length === 1) return true;

	let start = 0, end = input.length - 1;
	while(start < end){
		if(input.charAt(start) !== input.charAt(end)){
			return false;
		}
		start++;
		end--;
	}
	return true;
}

/*

isPalindrome("KayaK")
true

isPalindrome("Kayak")
false

isPalindrome("racecar")
true

isPalindrome("race car")
false


*/