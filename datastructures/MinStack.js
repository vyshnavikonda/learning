/**
* Initialize a min stack row
*/
var StackRow = function(){
    this.value = null;
    this.min = null;
};

/**
 * Initialize new Min Stack
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