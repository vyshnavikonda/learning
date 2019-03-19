function LinkedList(){
	this.head = null;
	this.next = null;
}

function Node(data){
	this.data = data;
	this.next = null;
}

LinkedList.prototype.addToHead = function(data){
	let node = new Node(data);
	
	//List is empty
	if(!this.head){
		this.head = node;
    } else{
        //List is not empty
        let newHead = node;
        newHead.next = this.head;
        this.head = newHead;
	}	
	
}


LinkedList.prototype.printNodes = function(){
	if(!this.head){
		console.log("List is empty!");
	} else{
		let temp = this.head;
		while(temp){
			console.log(temp.data+"\n");
			temp = temp.next;
		}
	}
}


LinkedList.prototype.addToTail = function(data){
	let node = new Node(data);
	
	//If list is empty
	if(!this.head){
		this.head = node;
	} else{
		//List is not empty -> traverse till the tail
		let temp = this.head;
		while(temp.next){	
			temp = temp.next;
		}
		if(temp.next === null){
			temp.next = node;
		}
	}

}

LinkedList.prototype.insert = function(data, position){
	let node = new Node(data);
	if(position === 1){
		this.addToHead(data);
	} else{
		let temp = this.head;
		for(let i=0; i<position-2; i++){
			if(temp.next === null) break;
			temp = temp.next;
		}
		let temp2 = temp.next;
		temp.next = node;
		node.next = temp2;		
	}
	
}

LinkedList.prototype.deleteNode = function(position){
	let temp = this.head;
	if(position === 1){
		temp = temp.next;
		this.head = temp;
	} else{
		//Traverse till the position
		for(let i=1; i<position-1; i++){
			if(temp.next === null) break;
			temp = temp.next;
		}
		let temp2 = temp.next;
		temp.next = temp2.next;
	}

}
