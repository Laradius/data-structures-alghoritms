
  export class Stack<T> {
    private _data : Array<T> = [];
  
    peek() {
      return this._data[this._data.length - 1];
    }
    push(value: T) {
        this._data.push(value);
    }
    pop(): T {
        return this._data.pop();
    }
    //isEmpty
  }
  