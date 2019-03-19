class HashMap{
	constructor(){
		this.map = [];
	}

	//Hashing function - very simple
	hash(idx){
		return parseInt(idx) * 2;
	}
	
	//Setter
	set(key, val){
		this.map.push([this.hash(key), val]);
	}

	//Getter
	get(key){
		return this.map[this.hash(key)];
	}
	
}