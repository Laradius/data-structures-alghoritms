import { Stack } from "./Stack/StackArrayImplementation";

const myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());