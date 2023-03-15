class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);

        if(this.root === null){ 
            this.root = newNode;
            return this;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }else{
                        currentNode = currentNode.left;
                    }
                }else{
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }else{
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }   

    search(value){
        let currentNode = this.root;
        while(true){
            if(currentNode.value === value){
                return currentNode;
            }else{
                currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
                if(!currentNode) return "Not found";
            }
        }
    }
}

const myTree = new BinarySearchTree();
myTree.insert(10);
myTree.insert(20);
myTree.insert(5);
myTree.insert(49);
myTree.insert(1);
myTree.insert(25);
myTree.insert(31);
myTree.insert(12);
myTree.insert(4);

myTree.search(1);
myTree.search(100);
myTree.search(2);
myTree.search(49);
myTree.search('a');
myTree.search(5);
myTree.search(4);
myTree.search(30);

//Metodos
    // search() --> Busca por un nodo
    // insert() --> Inserta un nodo
    // delete() --> Borra un nodo