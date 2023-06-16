export class Node {

    public left: Node | null;
    public right: Node | null;
    public value: number;

    constructor(value: number){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
 export  class BinarySearchTree {
    public root: Node | null;
    constructor(){
      this.root = null;
    }
    insert(value: number){
     if(this.root === null){
         this.root = new Node(value);
     }
     else {
        let currentNode = this.root;
        let nodeFound = false;
        while(!nodeFound){
            if (currentNode.value > value) {
                if (currentNode.left === null) {
                    currentNode.left = new Node(value);
                    nodeFound = true;
                }
                else {
                    currentNode = currentNode.left;
                }

            }
            else if (currentNode.value < value) {
                if (currentNode.right === null) {
                    currentNode.right = new Node(value);
                    nodeFound = true;
                }
                else {
                    currentNode = currentNode.right;
                }
            }
            else {
                nodeFound = true;
            }
        }
     }
    }
    lookup(value: number){
      if (!this.root) {
        return null;
      }
      let currentNode = this.root;
        while(currentNode){
            if (currentNode.value > value) {
                currentNode = currentNode.left;
            }
            else if (currentNode.value < value) {
                currentNode = currentNode.right;
            }
            else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return null;
    }
  }


  

  
  
  