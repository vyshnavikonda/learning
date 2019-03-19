function BinarySearchTree(){
	this.root = null;

}

function BSTNode(data){
	this.data = data;
	this.left = this.right = null;
}

BinarySearchTree.prototype.insert = function(data){
	let bstNode = new BSTNode(data);
	if(this.root === null){
		this.root = bstNode;
	} else{
		this.insertNode(this.root, bstNode);
	}
}

BinarySearchTree.prototype.insertNode = function(root, node){
	debugger;
	if(node.data <= root.data){
		if(root.left === null) root.left = node;
		else this.insertNode(root.left, node);	
	} else if(node.data > root.data){
		if(root.right === null) root.right = node;
		else this.insertNode(root.right, node);
	}
}

BinarySearchTree.prototype.search = function(data){
	this.searchNode(this.root, data);
}

BinarySearchTree.prototype.searchNode = function(root, data){
	
	if(root === null){
		return null;
	} else if(data <= root.data){
		this.searchNode(root.left, data);
	} else if(data > root.data){
		this.searchNode(root.right, data);
	} else{
		return root;
	}

}

BinarySearchTree.prototype.remove = function(data){
	this.root = this.removeNode(this.root, data);
}

BinarySearchTree.prototype.removeNode = function(root, data){
	
	if(root === null){
		return null;
	} else if(data <= root.data){
		root.left = this.removeNode(root.left, data);
		return root;
	} else if(data > root.data){
		root.right = this.removeNode(root.right, data);
		return root;
	} else{
		if(root.left === null && root.right === null){
			root = null;
            return root;
		}
		if(root.left === null){
			root = root.left;
			return root;
		} else if(root.right === null){
			root = root.right;
			return root;
		}

		let aux = this.findMinNode(root.right);
		root.data = aux.data;
	
		root.right = this.removeNode(root.right, aux.data);
		return root;
	}

}

BinarySearchTree.prototype.findMinNode = function(root){
		if(root.left === null){
			return null;
		} else{
			return this.findMinNode(root.left);
		}
}