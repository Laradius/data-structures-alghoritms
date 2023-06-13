export class Node<T> {
    public value: T;
    public next: Node<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }
  
  export class Queue<T> {

    private _first: Node<T>;
    private _last: Node<T>;
    private _length: number;

    constructor(){
      this._first = null;
      this._last = null;
      this._length = 0;
    }
    peek() {
        return this._first.value;
    }
    enqueue(value : T){
        const newNode = new Node<T>(value);
        if(this._length === 0){
            this._first = newNode;
            this._last = newNode;
        }
        else{
            this._last.next = newNode;
            this._last = newNode;
        }
        this._length++;
    }
    dequeue() : T{
        if(!this._first){
            return null;
        }

        const temp = this._first.value;

        if(this._first === this._last){
            this._last = null;
        }
        this._first = this._first.next;
        this._length--;
        return temp;
    }
    //isEmpty;
  }