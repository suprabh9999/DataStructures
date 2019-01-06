class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);
        if(!this.root){
            this.root =  newNode;
            return this;
        }
        else{
            var currentRoot =  this.root;
            while(true){
                if(value < currentRoot.value){
                     if(!currentRoot.left){
                         currentRoot.left =  newNode;
                         return this;
                     }
                     else{
                         currentRoot =  currentRoot.left;
                     }
                }
                else if(value > currentRoot.value){
                    if(!currentRoot.right){
                         currentRoot.right =  newNode;
                         return this;
                     }
                     else{
                         currentRoot =  currentRoot.right;
                     }
                }
            }
        }
    }

    find(value){
        if(!this.root){
            return `Couldn't find value : ${value} as tree is empty.`;
        }
        else{
            var currentNode =  this.root;
            var found = false;
            while(currentNode && !found){
               if(value < currentNode.value){
                       currentNode = currentNode.left;
               }
               else if(value > currentNode.value){
                       currentNode =  currentNode.right;
               }
               else{
                       found =  true;
               }
            }
           
           return found ? currentNode : false;
        }
    }
}

//          10
//      5        13
//    2   7    11   16

var tree =  new BST();
