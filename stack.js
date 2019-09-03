class _Node {
  constructor(data, next) {
    (this.data = data), (this.next = next);
  }
}
//stack--singly linked list with constraints where items can
//only be inserted and deleted at the end of the list
class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    //set pointer to next item below
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}
//2. useful methods for a stack
function createStack() {
  const starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  //console.log(starTrek)
  return starTrek;
}
//let starTrek = createStack();

function peek(stack) {
  // console.log(stack.top);
  return stack.top;
}
//peek(starTrek)

function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  } else return false;
}

//isEmpty(starTrek);

function display(stack) {
  let node = stack.top;
  while (node !== null) {
    console.log(node);
    node = node.next;
  }
}
//first  item is where the next = null--last item displayed
//display(starTrek)

//starTrek.pop()
//pop Scotty
//starTrek.pop()
//pop McCoy
//display(starTrek)

//3. check for palindromes with stack

function is_palindrome(s) {
  let stackForward = new Stack();
  let stackReverse = new Stack();
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  for (let i = 0; i < s.length; i++) {
    stackForward.push(s[i]);
  }
  for (let i = s.length - 1; i >= 0; i--) {
    stackReverse.push(s[i]);
  }
  //display(stackForward)
  //display(stackReverse)
  let node1 = stackForward.top;
  let node2 = stackReverse.top;
  let answer = false;
  while (node1 !== null && node2 !== null) {
    if (node1.data === node2.data) {
      node1 = node1.next;
      node2 = node2.next;
      answer = true;
    } else return (answer = false);
  }
  return answer;
}
///or compare stack to string one time
//True, true, true, false
/* console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida")); */
//console.log(is_palindrome("abda"));

//4 (2n +2)-1=4;
function matchParentheses(expression) {
  let stack = new Stack();
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === ")" || expression[i] === "(") {
      stack.push(expression[i]);
    }
  }
  let count = 0;
  let node = stack.top.data;
  while (stack.top !== null) {
    count++;
    stack.pop();
  }
  if (count % 2 !== 0) {
    if (node === "(") {
      console.log("missing closing parentheses");
    }
    if (node === ")") {
      console.log("missing opening parentheses");
    }
    return false;
  } else return true;
}

function matchParenthesesTwo(expression) {
  let stack = new Stack();
  for (let i = 0; i < expression.length; i++) {
    stack.push(expression[i]);
  }
  let open = false;
  let count = 0;
  let close = false;
  while (stack.top !== null) {
    if (stack.top.value === "(") {
      open = true;
    }
    if (stack.top.value === ")") {
      close = true;
    }
    count++;
    stack.pop();
  }
  console.log(open, close, count);
}
//or push only open and then when have a close pop the open to it
//matchParentheses("(2-1)+1)");
//matchParenthesesTwo("(2-1)+1)");
// stack 5 3 6 2 output 2 3 5 6
//tempStack--fill with 2 3 5 6 then pop back to stack
//pop top which would be 5 and save as a temp--since temp stack is empty push to it
//then pop again--compare this to the temp-
//by peeking at temp--then compare--if peek is > temp then pop top from temp to orig
//then push value to temp
// then
function sortStack(stack) {
  // stack: 7 3 1
  // tempStack: 2
  let tempStack = new Stack();

  while (stack.top !== null) {
    console.log('TOP:',stack.top.data)
    let placeholder = stack.pop();
    console.log(tempStack.top !== null)
    if(tempStack.top) {
    console.log(tempStack.top.data, placeholder)
    }
    while (tempStack.top !== null && tempStack.top.data < placeholder) {
      stack.push(tempStack.pop());
      console.log('INNER LOOP RUNS')
    }
    console.log('ADDING TO TEMP:', placeholder)
    tempStack.push(placeholder);
  }
  display(tempStack);
  console.log("TEMPSTACK", tempStack);
}

let numStack = new Stack();
numStack.push(1);
numStack.push(3);
numStack.push(7);
numStack.push(2);
//display(numStack)
sortStack(numStack);


//creating Queue using stacks
class queueStack { 
stack1 = new Stack()
stack2= new Stack()

enqueue(item){
  this.stack1.push(item)
}

dequeue(){
  if(this.stack2.top === null){
    if(this.stack1.length === 0){
      console.log('nothing to dequeue')
    }
    while(this.stack1.top !== null){
      let move = this.stack1.pop()
      this.stack2.push(move)
    }
  }
  this.stack2.pop()
}
}

let newQueueStack = new queueStack()

newQueueStack.enqueue('Spock')
newQueueStack.enqueue('Charley')
newQueueStack.enqueue('Fred')

//display(newQueueStack.stack1)

newQueueStack.dequeue()

display(newQueueStack.stack2)