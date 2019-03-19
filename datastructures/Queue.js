function Queue(){
	this.queue = [];
	this.front = -1;
	this.rear = -1;
}

Queue.prototype.isEmpty = function(){
	if(this.front === -1 && this.rear === -1) return true;
	else return false;
}

Queue.prototype.enqueue = function(data){
	if(this.isEmpty()){
		this.front++;
		this.rear++;
	} else{
		this.rear++;	
	}
	this.queue[this.rear] = data;
}

Queue.prototype.dequeue = function(){
	let deleted;

	if(this.isEmpty()){
		console.log("Queue is empty!!");
	} else{
		deleted = this.queue[this.front];
		delete this.queue[this.front];
		if(this.front === this.rear){//If only one element in queue - reset front and rear
			this.front = this.rear = -1;
        } else{
			this.front++;
		}
	}
	return deleted;
}

Queue.prototype.peek = function(){
	if(this.front !== -1){
		return this.queue[this.front];
    } else{
		console.log("Queue is empty!!");
	}
}

Queue.prototype.print = function(){
	if(this.front !== -1){
		for(let i=this.front; i<this.queue.length; i++){
			console.log(this.queue[i]);
		}
	}
}