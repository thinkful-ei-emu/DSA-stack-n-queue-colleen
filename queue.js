//queue only can insert at beginning or end

class _Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Queue {
  constructor() {
    (this.first = null), (this.last = null);
  }

  enqueue(data) {
    //add item to the end of the queue
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      //connect new node after last item
      this.last.next = node;
    }
    //makes new node last item on node
    this.last = node;
  }

  dequeue() {
    //if queue is empty
    if (this.first === null) {
      return;
    }
    const node = this.first;
    //setting node var as first
    //then setting first as next from first
    this.first = this.first.next;
    if (node === this.last) {
      //if node is the last node, setting last to null
      this.last = null;
    }
    return node.value;
  }
}

function starTrek() {
  let starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk')
  starTrekQ.enqueue('Spock')
  starTrekQ.enqueue('Uhura')
  starTrekQ.enqueue('Sulu')
  starTrekQ.enqueue('Checkov')
  return starTrekQ
}

let starTrekQueue = starTrek()

function peek(queue){
  console.log(queue.first)
}
//peek(starTrekQueue)

function isEmpty(queue){
  if( queue.first === null){
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
}

//isEmpty(starTrekQueue)

function display(queue){
  let item = queue.first
  while (item !== null){
    console.log(item)
    item = item.next
  }
}

//display(starTrekQueue)
//remove spock
//starTrekQueue.dequeue()
//starTrekQueue.dequeue()
//display(starTrekQueue)

//doubly linked queue

class _dNode {
  constructor(){
    this.value = value
    this.next = next
    this.prev = prev
  }
}

class doubleQueue {
  constructor (){
    this.first = null
    this.last = null
  }

  enqueue(data){
    if(this.first === null){
      this.first = new _Node(data, null, null)
    }
    if(this.last){
      let node = new _Node(data, null, this.last)
      this.last.next = node
      this.last = node
    }
    else {
      let node = new _Node(data, null, this.first)
      this.last = node
      this.first.next = this.last
    }
  }

  dequeue(){
    if(this.first === null){
      return;
    }
    const node = this.first
    this.first = this.first.next

    if(node === this.last){
      this.last = null
    }
  }
}

let newDQueue = new doubleQueue()

newDQueue.enqueue('Kirk')
newDQueue.enqueue('Spock')
newDQueue.enqueue('Uhura')
newDQueue.enqueue('Sulu')
newDQueue.enqueue('Checkov')

display(newDQueue)