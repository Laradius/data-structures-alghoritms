export default class LinkedList<T> {
  private _head: ListModel<T>;
  private _tail: ListModel<T>;
  private _length: number;

  constructor(value: T) {
    this._head = { value: value, next: null };
    this._tail = this._head;
    this._length = 1;
  }

  public append(value: T): void {
    const newNode: ListModel<T> = { value: value, next: null };
    this._length++;
    this._tail.next = newNode;
    this._tail = newNode;
  }

  public prepend(value: T): void {
    const newNode: ListModel<T> = { value: value, next: null };
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

interface ListModel<T> {
  value: T;
  next: ListModel<T> | null;
}
