export class Node<T> {
  public value: T;
  public next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Stack<T> {
  private _top: Node<T> | null;
  private _bottom: Node<T> | null;
  private _length: number;

  constructor() {
    this._top = null;
    this._bottom = null;
    this._length = 0;
  }

  peek() {
    return this._top.value;
  }
  push(value: T) {
    const newNode = new Node<T>(value);
    if (this._length === 0) {
      this._top = newNode;
      this._bottom = this._top;
    } else {
      newNode.next = this._top;
      this._top = newNode;
    }
    this._length++;
  }
  pop(): T {
    if (!this._top) {
      return null;
    }
    const temp = this._top;
    
    if (this._top === this._bottom) {
      this._bottom = null;
    } 
      this._top = this._top.next;
      this._length--;
    
    return temp.value;
  }
  //isEmpty
}
