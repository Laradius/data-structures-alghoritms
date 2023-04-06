export default class LinkedList<T> {
  private _head: ListModel<T>;
  private _tail: ListModel<T>;
  private _length: number;

  constructor(value: T) {
    this._head = new ListModel<T>(value);
    this._tail = this._head;
    this._length = 1;
  }

  public printList(): void {
    const array: ListModel<T>[] = [];
    let currentNode = this._head;
    while (currentNode !== null) {
      array.push(currentNode);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  public insert(index: number, value: T): void {
    if (index >= this._length) {
      throw Error("Index out of bounds");
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this._length - 1) {
      this.append(value);
      return;
    }

    const newNode: ListModel<T> = new ListModel<T>(value);
    let previousNode: ListModel<T> = this.traverse(index - 1);
    let currentNode = previousNode.next;

    newNode.next = currentNode;
    previousNode.next = newNode;
    this._length++;
  }

  public traverse(index: number) {
    let currentNode = this._head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  public remove(index: number): void {
    if (index >= this._length) {
      throw Error("Index out of bounds");
    }

    if (index == 0) {
      this._head = this._head.next;
    }

    if (index == this._length - 1) {
      this._tail = this.traverse(index - 1);
      this._tail.next = null;
    }

    let previousNode: ListModel<T> = this.traverse(index - 1);
    let deletedNode = previousNode.next;
    let nextNode = deletedNode.next;

    previousNode.next = nextNode;
  }

  public append(value: T): void {
    const newNode: ListModel<T> = new ListModel<T>(value);
    this._length++;
    this._tail.next = newNode;
    this._tail = newNode;
  }

  public prepend(value: T): void {
    const newNode: ListModel<T> = new ListModel<T>(value);
    newNode.next = this._head;
    this._head = newNode;
    this._length++;
  }

  public get head(): T {
    return this._head.value;
  }

  public get tail(): T {
    return this._tail.value;
  }

  public get length(): number {
    return this._length;
  }
}

class ListModel<T> {
  private _value: T;
  private _next: ListModel<T>;

  public get value(): T {
    return this._value;
  }

  public get next(): ListModel<T> {
    return this._next;
  }

  public set next(value: ListModel<T>) {
    this._next = value;
  }

  constructor(value: T) {
    this._value = value;
    this._next = null;
  }
}
