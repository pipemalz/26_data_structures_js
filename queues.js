class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{ //FIRST IN FIRST OUT. FIFO
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.front = newNode;
            this.back = newNode;
        }else if(this.length > 0){
            const holdingPointer = this.back;
            holdingPointer.next = newNode;
            this.back = newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){
        if(this.length > 0){
            if(this.length === 1){
                this.front = null;
                this.back = null;
            }else if(this.length > 1){
                const holdingPointer = this.front.next;
                delete this.front;
                this.front = holdingPointer;
            }
            this.length--;
            return this;
        }else{
            return false;
        }
    }
    peek(){
        return this.front;
    }
}

const myQueue = new Queue();


// Methods:
//     enqueue() --> Agregar un elemento al final de la linea.
//     dequeue() --> Remover al primer elemento de la linea.
//     peek() --> Tomar el primer elemento de la linea.
