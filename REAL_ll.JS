// rfer to know

// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }

// class linkedlist {
//     constructor() {
//         this.head = null
//         this.size = 0

//     }

//     isEmpty() {
//         return this.size === 0

//     }
//     getSize() {
//         return this.size
//     }



    // insertAtBeginning(data) {
    //     const node = new Node(data)
    //     if (this.isEmpty()) {
    //         this.head = node
    //     } else {
    //         node.next = this.head
    //         this.head = node
    //     } this.size++
    // }

    // printEven() {
    //     if (!this.head) return null;
    
    //     let curr = this.head;
    //     let result = '';
    
    //     while (curr) {
    //         if (curr.data % 2 === 0) {
    //             result += curr.data + ' ';  // Add a space after each even number
    //         }
    //         curr = curr.next;  // Move to the next node
    //     }
    
    //     return result.trim();  // Trim any trailing space
    // }
    

    // deleteEvenNodes() {
    //     if (!this.head) return null;
    
    //     // Handle the case where the head node(s) is/are even
    //     while (this.head && this.head.data % 2 === 0) {
    //         this.head = this.head.next;
    //     }
    
    //     // Now handle the remaining nodes
    //     let curr = this.head;
    
    //     while (curr && curr.next) {
    //         if (curr.next.data % 2 === 0) {
    //             curr.next = curr.next.next;
    //         } else {
    //             curr = curr.next;
    //         }
    //     }
    // }

    

    // reverse(){
    //     let curr=this.head
    //     let prev=null
    //     while(curr){
    //         let next=curr.next
    //         curr.next=prev
    //         prev=curr
    //         curr=next
    //     }this.head=prev
    // }




    // seperateEaO() {
    //     let even = []
    //     let odd = []
    //     let curr = this.head
    //     while (curr) {
    //         if (curr.data % 2 === 0) {
    //             even.push(curr.data)
    //         } else {
    //             odd.push(curr.data)
    //         } curr = curr.next
    //     } return { even, odd }
    // // }


    // middle() {
    //     if (!this.head) {  // Check if the list is empty
    //         console.log("List is empty");
    //         return null;
    //     } 
        
    //     if (this.getSize() % 2 == 0) {  // Check if the list has an even number of elements
    //         console.log("No middle element, the list size is even");
    //         return null;
    //     }
    
    //     let slow = this.head;
    //     let fast = this.head;
        
    //     while (fast && fast.next) {  // Move `fast` by two steps and `slow` by one step
    //         slow = slow.next;
    //         fast = fast.next.next;
    //     }
        
    //     return slow.value;  // Return the middle element's value
    // }
    


// insert(data,index){
// if(index<0||index>this.size){
//     return null
    
// }if(index==0){
//     this.insertAtBeginning(data)
// }

// else{
//     const node=new Node(data)
//    let prev=this.head
//     for(var i=0;i<index-1;i++){
//         prev=prev.next
//     }
//     node.next=prev.next
//     prev.next=node
//     this.size++
// }
// }


// search(data){
//     let curr=this.head
//     let count=0
//     while(curr){
//         if(curr.data===data){
//             return count
//         }
//         curr=curr.next
//         count++
//     }
//     return null
// }


// fromArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         this.insertAtBeginning(array[i]);
//     }
// }


// removeMiddle(){
//     let prev=this.head
//     let slow=this.head
//     let fast=this.head
//     while(fast&&fast.next){
//         prev=slow
//         slow=slow.next
//         fast=fast.next.next
        
//     }prev.next=slow.next
// }

// SumOfOdd(){
//     let curr=this.head
//     let sum=0
//     while(curr){
//         if(curr.data%2!==0){
//             sum+=curr.data
//         }curr=curr.next
//     }return sum
// }


// convertTocircular(){
//     if(!this.head)
//         return null

//         let curr=this.head
//         while(curr.next){
//             curr=curr.next
//         }
//         curr.next=this.head
    
// }




// isCircular(){
//     if(!this.head) return null

//     let slow=this.head
//     let fast=this.head
//     while(fast&&fast.next){
//         slow=slow.next
//         fast=fast.next.next
//         if(slow===fast){
//             return true
//         }
//     }return false
// }


// removeValue(value){ 
//     while(this.head && this.head.value == value) {
//         this.head = this.head.next;
//         this.size--
//     }
//         let temp=this.head
//         while(temp&&temp.next){
//             if(temp.next.value==value){
//                 temp.next=temp.next.next;
//                 this.size--
//             }
//             temp=temp.next
//         }
    

// }




// reverse a ll

// reverse(){
//     let curr=this.head
//     let prev=null
//     while(curr){
//         let next=curr.next
//         curr.next=prev
//         prev=curr
//         curr=next
//     }this.head=prev
// }


// even and odd numbers

// seperateEaO() {
//     let even = []
//     let odd = []
//     let curr = this.head
//     while (curr) {
//         if (curr.data % 2 === 0) {
//             even.push(curr.data)
//         } else {
//             odd.push(curr.data)
//         } curr = curr.next
//     } return { even, odd }
// }


//find the middle of a linked list

// middle(){
//     let slow=this.head
//     let fast=this.head
//     let length=0

//     while(fast){
//         length++
//         fast=fast.next

//     }if(length%2===0){
//         return "no middle"
//     }
// fast=this.head

//     while(fast&&fast.next){
//         slow=slow.next
//         fast=fast.next.next
//     }return slow.data
// }



// search and return index

// search(data){
//     let curr=this.head
//     let count=0
//     while(curr){
//         if(curr.data===data){
//             return count
//         }
//         curr=curr.next
//         count++
//     }
//     return null
// }




// remove middle

// removeMiddle(){
//     let prev=this.head
//     let slow=this.head
//     let fast=this.head
//     while(fast&&fast.next){
//         prev=slow
//         slow=slow.next
//         fast=fast.next.next
        
//     }prev.next=slow.next
// }

//remove value

// removeValue(target) {
//     if(!this.head){
//         return null
//     }if(this.head.data===target){
//         this.head=this.head.next
//     }

//     let prev = this.head;
//     let curr = this.head;

//     while (curr) {
//         if (curr.data === target) {
//             if (curr.next) {
//                 prev.next = curr.next;
//             } else {
//                 prev.next=null
//             }this.size--
//         }
//         prev=curr
//         curr = curr.next;
// break
//     }
// }




//remove all sasme value

// removeAllSameValue(value){

//     let prev=this.head
//     let curr=this.head
//  while (curr !== null && curr.data === value) {
//         this.head = curr.next; 
//         curr = this.head; 
//         this.size--;
//     }
//     while(curr){
//         if(curr.data===value){
//             prev.next=curr.next
//             this.size--
//         }else{
//             prev=curr
//         }curr=curr.next
//     }

// }

//// sum of odd numbers

// SumOfOdd(){
//     let curr=this.head
//     let sum=0
//     while(curr){
//         if(curr.data%2!==0){
//             sum+=curr.data
//         }curr=curr.next
//     }return sum
// }



    // print() {
    //     if (this.isEmpty()) {
    //         console.log("list is empty");

    //     } else {
    //         let prev = this.head
    //         let listValue = ''
    //         while (prev) {
    //             listValue += `${prev.data} `
    //             prev = prev.next
    //         } console.log(listValue.trim());

    //     }
    // }


    // merge(head){
    //    let temp=this.head
    //     while(temp.next){
    //         temp=temp.next
    //     }
    //     temp.next=head
    // }



// }

// const array = [1, 2, 3, 4, 5];

// const ll=new linkedlist()

// ll.insertAtBeginning(8)
// ll.insertAtBeginning(3)
// ll.insertAtBeginning(5)
// ll.insertAtBeginning(7)
// ll.insertAtBeginning(10)
// ll.insertAtBeginning(70)
// ll.insertAtBeginning(70)
// ll.print()
// l1.merge(l2.head)

// ll.removeMiddle()
// ll.print()
// console.log(ll.insert(44,88));

// console.log("middle element is:",ll.middle());

// ll.search(10)
// console.log(ll.search(10));
// ll.fromArray(array)
// ll.print()


// ll.removeAllSameValue(10)
// ll.print()
// console.log(ll.SumOfOdd());

// ll.convertTocircular()
// console.log("is circular",ll.isCircular());







// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     prepend(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         } this.size++
//     }

// palindrome() {
//     let values = [];
//     let curr = this.head;

//     while (curr) {
//         values.push(curr.data);  
//         curr = curr.next;
//     }

//     let left = 0;
//     let right = values.length - 1;

//     while (left < right) {
//         if (values[left] !== values[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// remove duplicates from sorted linked list

// remove() {
//     if (!this.head) return null;  // Handle empty list

//     let curr = this.head;

//     while (curr && curr.next) {
//         if (curr.data === curr.next.data) {
//             curr.next = curr.next.next;  // Skip the duplicate node
//         } else {
//             curr = curr.next;  // Move to the next node
//         }
//     }
    
//     return this.head;  // Return the updated head of the list
// }


//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         } if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (var i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             } node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }


//     removeFrom(index){
//         if(index<0||index>=this.size){
//             return null
//         }if(index===0){
//             var removeNode=this.head
//             this.head=this.head.next
//         }else{
//             let prev= this.head
//             for(var i=0;i<index-1;i++){
//                 prev=prev.next
//             }removeNode=prev.next
//             prev.next=removeNode.next
//         }this.size--
//         return removeNode.value
//     }

// removeIndex(index) {
//     if (index < 0 || index >= this.size) {
//         console.log("Index out of bounds");
//         return;
//     }
    
//     if (index === 0) {
//         // Remove the head
//         this.head = this.head.next;
//     } else {
//         let curr = this.head;
//         // Traverse to the node just before the one we want to remove
//         for (let i = 0; i < index - 1; i++) {
//             curr = curr.next;
//         }

//         // If we're removing the last node, set curr.next to null
//         if (curr.next.next === null) {
//             curr.next = null;
//         } else {
//             curr.next = curr.next.next;
//         }
//     }
    
//     this.size--;
// }

//     removeAll(value) {
//         if (!this.head) {  // If the list is empty
//             console.log("List is empty, nothing to remove.");
//             return;
//         }

//         // Handle the case where the head has the value to be removed
//         while (this.head && this.head.value === value) {
//             this.head = this.head.next;
//         }

//         let current = this.head;
//         let previous = null;

//         // Traverse the list to remove all nodes with the specified value
//         while (current) {
//             if (current.value === value) {
//                 previous.next = current.next;
//             } else {
//                 previous = current;
//             }
//             current = current.next;
//         }
//     }
    


//     print() {
//         if (this.isEmpty()) {
//             console.log("List is empty");
//         } else {
//             let current = this.head;
//             let listValue = '';
//             while (current) {
//                 listValue += `${current.value} `;
//                 current = current.next;
//             }
//             console.log(listValue.trim());
//         }
//     }
// }

// const list = new LinkedList();
// console.log("List is empty:", list.isEmpty());
// // list.print();
// // list.prepend(10);
// // list.prepend(20);
// // list.prepend(30);
// list.append(88)
// list.append(90)
// list.append(90)
// list.append(90)
// list.append(90)
// list.append(90)
// list.print()
// list.removeAll(90)
// list.print()







// //  // Method to insert a new node in sorted order
// insertSorted(data) {
//     const newNode = new Node(data);

//     if (this.head === null || this.head.data >= data) {
//         newNode.next = this.head;
//         this.head = newNode;
//     } else {
//         let current = this.head;
//         while (current.next !== null && current.next.data < data) {
//             current = current.next;
//         }
//         newNode.next = current.next;
//         current.next = newNode;
//     }

//     this.size++;
// }


// removeDuplicates() {
//     const seen = new Set();
//     let current = this.head;
//     let previous = null;

//     while (current !== null) {
//         if (seen.has(current.value)) {
//             // Duplicate found; remove it
//             previous.next = current.next;
//         } else {
//             // No duplicate; add value to set and move previous pointer
//             seen.add(current.value);
//             previous = current;
//         }
//         current = current.next;
//     }
// }
