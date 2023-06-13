import { Stack } from "./Stack/StackLinkedListImplementation";

const myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack);
myStack.push(3);