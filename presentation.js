// STACKS - LIFO

function Stack() {
  
    var list = [];
    
    this.push = function(el) {
      list.push(el)
    };
    
      this.pop = function(el) {
      list.pop(el)
    };
      
      this.peek = function() {
        return list[list.length-1]
      };
    
    this.isEmpty = function () {
      return list.length == 0;
    }
    
    this.clear = function () {
      list = [];
    };
    
    this.print = function () {
      console.log(list.toString());
    };
      
}
    
  var stck = new Stack();

//   stck.push("unu");
//   stck.push("doi");
//   stck.push(8);
//   stck.print();
//   console.log(stck.peek());
//   console.log(stck.isEmpty());
//   stck.pop();
//   stck.pop();
//   stck.print();

// QUEUES - FIFO

function Queue() {
    let arr = [];
    
    this.enqueue = (el) => arr.push(el);
    
    this.dequeue = () => arr.shift();
    
    this.peek = () => arr[0];
    
    this.isEmpty = () => arr.length == 0;
    
    this.size  = () => arr.length;
    
    this.display = function() {
      console.log(arr.toString());
    }
  
  }
  
  
  var que = new Queue();
  
//   que.enqueue("unu");
//   que.enqueue("doi");
//   que.enqueue(123);
  
//   console.log(que.peek());


// LINKED LISTS

function LinkedList () {
    let Node = function (element) {
      this.element = element;
      this.next = null;
    };
    
    let length = 0;
    let head = null;
    
    this.append = function (element) {  
      let node = new Node (element),
          current; 
      if (head === null) {
        head = node;
      } else {
        current = head;
          while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      length++;
    };
    
    this.insert = function (position, element) {
      if (position >= 0 && position <= length) {
        let node = new Node(element),
            current = head,
            previous,
            index = 0;
        if (position === 0) {
          node.next = current;
          head = node;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          node.next = current;
          previous.next = node;
        }
        length ++;
        return true;
      } else {
        return false;
      }
    };
    
    this.removeAt = function (position) {
      if (position > -1 && psition < length) {
        let current = head;
        previous,
        index = 0;
        if (position === 0) {
          head = current.next;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          previous.next = current.next;
        }
        length--;
        return current.element;
      } else {
        return null;
      }
    };
    
    this.remove = function (element) {
      let index = this.indexOf(element);
      return this.removeAt(index);
    };
    
    this.indexOf = function (element) {
      let current = head,
          index = -1;
      while (current) {
        if (element === current.element) {
          return index;
        }
        index++;
        current = current.next;
      }
      return -1;
    };
    
    this.isEmpty = function () {
      return length === 0;  
    };
    
    this.size = function () {
      return length;
    };
    
    this.toString = function () {
      let current = head,
          string = "";
      while (current) {
        string += current.element + (current.next ? ' ' : '');
        current = current.next;
      }
      return string;
    };
    
    this.getHead = function () {
      return head;
    };
  }

// let Linkedlist = new LinkedList();
// Linkedlist.append("unu");
// Linkedlist.append("doi");
// Linkedlist.append("trei");
// Linkedlist.append("patru");

// console.log(Linkedlist.toString());
// console.log(Linkedlist.indexOf("unu"));
// Linkedlist.insert(2, "cinci ")
// console.log(Linkedlist.toString());

