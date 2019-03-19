function Stack(){
	this.aStack = [];
	let top = -1;
}

Stack.prototype.pop = function(){
	if(this.top === -1){
		console.log("Stack is empty:cannot pop!");
	} else{
		let popped = this.aStack[this.top];
		this.top--;
		return popped;
	}
}

Stack.prototype.top = function(){
	if(this.top === -1) console.log("Stack is empty:no top");
	else return this.aStack[this.top];
}
Stack.prototype.isEmpty = function(){
	if(this.top === -1) return true;
	else return false;
}

Stack.prototype.print = function(){
	if(this.top === -1) console.log("Stack is empty");
	else{
		for(let i=this.top; i>-1; i--){
			console.log(this.aStack[i]);
		}
	}
}