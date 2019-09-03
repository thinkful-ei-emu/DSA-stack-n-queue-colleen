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
  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");
  return starTrekQ;
}

let starTrekQueue = starTrek();

function peek(queue) {
  console.log(queue.first);
}
//peek(starTrekQueue)

function isEmpty(queue) {
  if (queue.first === null) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

//isEmpty(starTrekQueue)

function display(queue) {
  let item = queue.first;
  while (item !== null) {
    console.log(item);
    item = item.next;
  }
}

//display(starTrekQueue)
//remove spock
//starTrekQueue.dequeue()
//starTrekQueue.dequeue()
//display(starTrekQueue)

//doubly linked queue

class _dNode {
  constructor() {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class doubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    if (this.first === null) {
      this.first = new _Node(data, null, null);
    }
    if (this.last) {
      let node = new _Node(data, null, this.last);
      this.last.next = node;
      this.last = node;
    } else {
      let node = new _Node(data, null, this.first);
      this.last = node;
      this.first.next = this.last;
    }
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
  }
}

let newDQueue = new doubleQueue();

newDQueue.enqueue("Kirk");
newDQueue.enqueue("Spock");
newDQueue.enqueue("Uhura");
newDQueue.enqueue("Sulu");
newDQueue.enqueue("Checkov");

//display(newDQueue)

function squareDancing() {
  let dancers = new Queue();
  dancers.enqueue(["F", "Jane"]);
  dancers.enqueue(["M", "Frank"]);
  dancers.enqueue(["M", "John"]);
  dancers.enqueue(["M", "Sherlock"]);
  dancers.enqueue(["F", "Madonna"]);
  dancers.enqueue(["M", "David"]);
  dancers.enqueue(["M", "Christopher"]);
  dancers.enqueue(["F", "Beyonce"]);
  let peopleWaiting = [];
  while (dancers.first !== null) {
    peopleWaiting.push(dancers.dequeue());
    console.log(peopleWaiting);
    let nextPerson = dancers.first.value;
    if (peopleWaiting[0][0] !== nextPerson[0]) {
      nextPerson = dancers.dequeue();
      console.log(
        `${peopleWaiting[0][0]} dancer is ${peopleWaiting[0][1]} ${
          nextPerson[0]
        } dancer is ${nextPerson[1]}`
      );
      peopleWaiting.splice(0, 1);
    }
  }
  console.log("LEFTOVERS", peopleWaiting);
  return peopleWaiting;
  /*   for (let i = 0; i < peopleWaiting.length; i++) {
    dancers.enqueue(peopleWaiting[i]);
  } */
}

squareDancing();

/* At the Ophidian Bank, a single teller serves a long queue of people. New customers join the end of the queue, and the teller will serve a customer only if they have all of the appropriate paperwork. Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue. Show what a few minutes of the bank's lobby would look like. */
 

function OphidianBank(queue){
 //takes in queue of customers, then for the length of the queue (while...) will take first customer and put into random t/f ==where 25% of the time will say 'f'--if f, then dequeue and enqueue, if t, then dequeue. 

 while(queue.first !== null){
   let person = queue.first
   let randomBool = Math.random() < 0.75
   if(randomBool == true){
     console.log(`${person.value} has the right paperwork, TRUE`)
     queue.dequeue()
   }
   else {
    console.log(`${person.value} has the wrong paperwork, FALSE`)

     queue.enqueue(person)
     queue.dequeue()
   }
 }
}

function makeBankLine(number){
  let bankLine = new Queue()
  for(let i = 0; i < number; i++){
  bankLine.enqueue(i)
  }
  return bankLine
}

let line = makeBankLine(100)

OphidianBank(line)