class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(value){
        var newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail =  newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        var popped=undefined;
       if(this.length===0){
           return popped;
       }
       else if(this.length===1){
           popped = this.tail.value;
           this.head = null;
           this.tail = null;
       }
       
       else{
        var current = this.head;
        while(current.next.next){
            current = current.next;
        }
        popped = current.next.value;
        current.next = null;
        this.tail = current;

       }
       this.length--;
       return popped;
    }

    shift(){
        var popped = undefined;
           if(this.length === 0)return popped;

           else if(this.length === 1){
               popped = this.head;
               this.head = null;
               this.tail = null;
           }
           else if(this.length === 2){
                popped = this.head;
                this.head = popped.next;
                this.tail = popped.next;
           }
           else{
               popped = this.head;
               this.head = this.head.next;
           }
           this.length--;
           return popped;
    }

    unShift(value){
        var newNode =  new Node(value);
        if(!this.head){
           this.head = newNode;
           this.tail = this.head;     
        }
        else{
            newNode.next = this.head;
            this.head =  newNode;
        }
        this.length++;
        return this.length;
    }

    get(index){
        if(index >= this.length){
                return `There is no value at index : ${index}`;
        }
        else if(index < 0){
             return 'Negative indexes are not allowed'; 
        }

        else{
             var currentIndex = 0;
             var flag = true;
             var currentNode = this.head;
             while(flag){
               if(currentIndex === index){
                        flag = false;
                       return currentNode.value;
               }
               else{
                       currentNode =  currentNode.next;
                       currentIndex++;

               } 
             }
        }
    }

    set(index, value){
        if(index >= this.length){
                return `There is no value at index : ${index}`;
        }
        else if(index < 0){
             return 'Negative indexes are not allowed'; 
        }

        else{
             var currentIndex = 0;
             var flag = true;
             var currentNode = this.head;
             while(flag){
               if(currentIndex === index){
                        flag = false;
                        currentNode.value =  value;
                       return currentNode;
               }
               else{
                       currentNode =  currentNode.next;
                       currentIndex++;

               } 
             }
        }
    }
    
    insertAt(index, value){
        
        if(index > this.length || index < 0){
            return `You cannot insert a node at index : ${index}`;
        }

        else if(index === this.length){
            return this.push(value);
        }
        else if(index  === 0){
             this.unShift(value);   
        }
        else{
             var current = this.head;
             var prevNode = null;
             var currentIndex=0;
             while(currentIndex!==index){
                prevNode = current;
                current = current.next;
                currentIndex++;
             }
             var newNode = new Node(value);
             newNode.next = prevNode.next;
             prevNode.next = newNode;
             this.length++;
             return this.length;
        }
} 

}

