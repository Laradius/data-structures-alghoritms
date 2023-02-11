export class HashTable<T> {
  private _data;
  constructor(size: number) {
    this._data = new Array<KeyValuePair<T>[]>(size);
  }

  public set data(keyPair: KeyValuePair<T>) {
    let address = this.hash(keyPair.key);
    if (!this._data[address]) {
      this._data[address] = [];
    }
    this._data[address].push(keyPair); // O(1)
  }

  public get(key: string) {
    let address = this.hash(key);
    const currentBucket = this._data[address];
    if (currentBucket) {
      for (let index in currentBucket) {
        if (currentBucket[index].key == key) {
          return currentBucket[index].value; // O(n) in worst case, O(1) in average
        }
      }
    }
    return undefined;
  }

  public keys(): string[] {
    const keysArray = [];
    for (let item of this._data) {
      if (item) {
        keysArray.push(item[0].key);
      }
    }
    return keysArray;
  }

  private hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this._data.length;
    }
    return hash;
  }
}

interface KeyValuePair<T> {
  key: string;
  value: T;
}
