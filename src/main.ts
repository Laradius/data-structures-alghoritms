import LinkedList from "./Linked Lists/LinkedList";

const linkedList = new LinkedList(1);

linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

linkedList.prepend(0);

console.log(linkedList);

linkedList.insert(3, 99);

linkedList.printList();
