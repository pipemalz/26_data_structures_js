class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  insert(index, value){
    if(index >= this.length){
        return this.append(value);
    }
    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    //1 - 2 - 3 - 4(firstPointer) - 4.5(newNode) - 5[index](holdingPointer) - 6
    this.length++;
    return this;
  }
  getTheIndex(index){
    let currentNode = this.head;
    for(let i = 0; i < index; i++){
        currentNode = currentNode.next;
    }
    return currentNode;
  }
  remove(index){
    if(index < this.length){
      const firstPointer = this.getTheIndex(index - 1);
      const holdingPointer = firstPointer.next;
      firstPointer.next = holdingPointer.next;
      if(index === (this.length-1)){
        this.tail = firstPointer;
      }
      this.length--;
      return new Node(holdingPointer.value);
    }
  }
}

const myLinkedList = new SinglyLinkedList(0);
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
console.log(myLinkedList.remove(2));




               

         