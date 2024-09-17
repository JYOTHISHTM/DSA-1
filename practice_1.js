

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }

    prepend(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        } this.size++
    }

    append(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        } this.size++
    }


    middle() {
        if (!this.head) return null

        let slow = this.head
        let fast = this.head
        let prev = this.head
        while (fast && fast.next) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
    }


    insert(data, index) {
        const node = new Node(data)
        if (index < 0 || index > this.size) {
            return null
        }
        if (index === 0) {
            this.prepend(data)
        } else {
            let curr = this.head
            for (var i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }

    delete() {
        if (!this.head) {
            return null
        }
        while (this.head && this.head.data % 2 === 0) {
            this.head = this.head.next
        }

        if (!this.head) {
            return null
        }
        let curr = this.head
        while (curr && curr.next) {
            if (curr.next.data % 2 === 0) {
                curr.next = curr.next.next
            } else {
                curr = curr.next
            }
        }
    }


    reverse() {
        let curr = this.head
        let temp = null
        while (curr) {
            let next = curr.next
            curr.next = temp
            temp = curr
            curr = next
        } this.head = temp
    }

    removeIndex(index) {
        if (index < 0 || index >= this.size) {
            return null
        }

        if (index === 0) {
            this.head = this.head.next
        } else {
            let curr = this.head
            for (var i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            if (curr.next.next === null) {
                curr.next = null
            } else {
                curr.next = curr.next.next
            }

        } this.size--
    }





    remove(data) {
        if (!this.head) {
            return null
        }

        if (this.head && this.head.data === data) {
            this.head = this.head.next
        }
        let curr = this.head
        while (curr && curr.next) {
            if (curr.next.data === data) {
                curr.next = curr.next.next
            }
            curr = curr.next
        }
    }

    insertSorted(data) {
        const node = new Node(data)
        if (!this.head || this.head >= data) {
            node.next = this.head
            this.head = node
        } else {
            let curr = this.head
            while (curr.next && curr.next.data <= data) {

                curr = curr.next


            }
            node.next = curr.next
            curr.next = node
        }


    }


    // convertToCircular() {
    //     let curr = this.head
    //     while (curr.next) {
    //         curr = curr.next
    //     } curr.next = this.head
    // }


    // isCircular() {
    //     let slow = this.head
    //     let fast = this.head
    //     while (fast && fast.next) {
    //         slow = slow.next
    //         fast = fast.next.next
    //         if (slow === fast) {
    //             return true
    //         }
    //     }
    //     return false
    // }


    merge(head) {
        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }
        curr.next = head
    }


    print() {
        if (!this.head) {
            console.log("list is empty");
        } else {
            let curr = this.head
            let result = ''
            while (curr) {
                result += `${curr.data} `
                curr = curr.next
            } console.log(result.trim());

        }
    }
}

const linkedlist = new Linkedlist()
const linkedlist1 = new Linkedlist()
// linkedlist.prepend(10)
// linkedlist.prepend(20)
// linkedlist.prepend(30)
// linkedlist.prepend(40)
// linkedlist.prepend(50)
// linkedlist.prepend(60)
// linkedlist.append(100)
// linkedlist.append(200)
// linkedlist.append(300)
// linkedlist.prepend(7)
// linkedlist.print()
// linkedlist.middle()
// linkedlist.insert(44,9)
// linkedlist.delete()
// linkedlist.reverse()
// linkedlist.remove(60)
// linkedlist.removeIndex(3)
linkedlist1.insertSorted(410)
linkedlist1.insertSorted(410)
linkedlist1.insertSorted(410)
linkedlist1.insertSorted(410)
linkedlist.insertSorted(10)
linkedlist.insertSorted(20)
linkedlist.insertSorted(40)
linkedlist.insertSorted(30)
linkedlist.print()
// linkedlist.convertToCircular()
// console.log(linkedlist.isCircular());
linkedlist1.print()

linkedlist1.merge(linkedlist.head)
linkedlist1.print()
