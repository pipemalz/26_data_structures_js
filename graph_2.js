// const graph3 = {
//     0: [2],
//     1: [2, 3],
//     2: [0, 1, 3],
//     3: [1, 2],
//     };
function printObject(obj, indent = "") {
    for (let prop in obj) {
      if (typeof obj[prop] === "object") {
        console.log(`${indent}${prop}:`);
        if (Array.isArray(obj[prop])) {
          if (obj[prop].length === 0) {
            console.log(`${indent}  (empty)`);
          } else {
            printObject(obj[prop], indent + "  ");
          }
        } else {
          if (Object.keys(obj[prop]).length === 0) {
            console.log(`${indent}  (empty)`);
          } else {
            printObject(obj[prop], indent + "  ");
          }
        }
      } else {
        console.log(`${indent}${prop}: ${obj[prop]}`);
      }
    }
  }

class Graph{
    constructor(){
        this.nodes = 0;
        this.adjacentList = {};
    }
    addVertex(node){
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdges(node1, node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    printAL(){
        printObject(this.adjacentList)
    }
}


const graph = new Graph();

        //      6
        //     / \
        //    1 - 3
        //    |   |
        //    4 - 5
        //   /
        //  8

graph.addVertex('1')
graph.addVertex('3')
graph.addVertex('4')
graph.addVertex('5')
graph.addVertex('6')
graph.addVertex('8')

graph.addEdges('3','5'); 
graph.addEdges('6','3');
graph.addEdges('1','6');
graph.addEdges('1','3');
graph.addEdges('1','4');
graph.addEdges('4','5');
graph.addEdges('8','4');

graph.printAL()
