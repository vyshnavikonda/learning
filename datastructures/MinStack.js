/*
This is Min Stack - at any point of time the method getMin() gives minimum value that has been pushed onto the stack.
The below piece of code in written in JavaScript, so runtime environment can be a Browser console.

Sample execution:

let minStack = new MinStack();
minStack.push(0);
minStack.push(-1);
minStack.push(2);
minStack.push(-5);
minStack.getMin();	//returns -5
minStack.pop();		//returns -5
minStack.top();		//returns 2
minStack.getMin();	//returns -1

*/

/**
* A stack row that consists of value and min value in the stack
**/
var StackRow = function(){
    this.value = null;
    this.min = null;
};

/**
 * New min stack can be created using:
 * let minStack = new MinStack();
 */
var MinStack = function() {
    this.stack = [];
    this.stackMin;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    
    let stackRow = new StackRow();
    stackRow.value = x;
    stackRow.min = this.stackMin; //Stack row contains current min in the stack
    this.stack.push(stackRow);
    
    //Updating the minimum value based on new.
    if(this.stack.length === 1){
        this.stackMin = x;
    }
    
    if(x < this.stackMin){
        this.stackMin = x;
    }
    
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped = this.stack.pop();
    this.stackMin = popped.min;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let top = this.stack[this.stack.length - 1];
    return top.value;    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stackMin;
};