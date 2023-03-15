class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{ //LAST IN FIRST OUT. LIFO
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.bottom = newNode;
            this.top = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length > 0){
            if(this.length === 1){
                this.top = null;
                this.bottom = null;
            }else{
                const holdingPointer = this.top.next;
                delete this.top;
                this.top = holdingPointer;
            }
            this.length--;
            return this;
        }
        return false;
    }
}

const myStack = new Stack();