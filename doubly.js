class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add a node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    // Add a node to the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }




    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        if (temp) {
            this.head = temp.prev;
        }
    }

///////////////////////

    // find middle and remove middle
    // middle() {
    //     if (!this.head) return null;

    //     let slow = this.head;
    //     let fast = this.head;

    //     while (fast !== null && fast.next !== null) {
    //         slow = slow.next;
    //         fast = fast.next.next;
    //     }

    //     return slow // This is the middle node
    // }

    // removeMiddle() {
    //     if (!this.head) return null;

    //     let middleNode = this.middle();
    //     if (middleNode === this.head) {
    //         this.head = this.head.next;
    //         if (this.head) {
    //             this.head.prev = null;
    //         }
    //     } else if (middleNode === this.tail) {
    //         this.tail = this.tail.prev;
    //         if (this.tail) {
    //             this.tail.next = null;
    //         }
    //     } else {
    //         middleNode.prev.next = middleNode.next;
    //         middleNode.next.prev = middleNode.prev;
    //     }
    //     this.size--;
    // }


    /////////////////


    remove(data) {
        if (!this.head) return null;

        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = this.head.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                } else if (current === this.tail) {
                    this.tail = this.tail.prev;
                    if (this.tail) {
                        this.tail.next = null;
                    }
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return current.data;
            }
            
            current = current.next;
        }
        return null;
    }



    
    printForward() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' ';
            current = current.next;
        }
        console.log(result.trim());
    }

    printBackward() {
        let current = this.tail;
        let result = '';
        while (current) {
            result += current.data + ' ';
            current = current.prev;
        }
        console.log(result.trim());
    }

    getSize() {
        return this.size;
    }
}
const dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.prepend(5);

console.log("List printed forward:");
dll.printForward(); // Output: 5 10 20 30

console.log("List printed backward:");
dll.printBackward(); // Output: 30 20 10 5

console.log("Remove 20:");
dll.remove(20);
dll.printForward(); // Output: 5 10 30

console.log("Size of list:");
console.log(dll.getSize()); // Output: 3
