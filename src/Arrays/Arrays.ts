//No exception handling
export class MyArray<Type> {
  length: number = 0;
  private data: { [key: number]: Type } = {};

  public get(index: number): Type {
    return this.data[index]; //O(1)
  }

  public push(item: Type): number {
    this.data[this.length] = item;
    this.length++;
    return this.length; //O(1)
  }

  public pop(): Type {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem; //O(1)
  }

  public deleteAtIndex(index: number): Type {
    const item = this.data[index];
    this.shiftItems(index);
    return item; //O(n)
  }

  private shiftItems(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--; //O(n)
  }
}
