export default function mergeSortedArrays<T>(
  array1: Array<T>,
  array2: Array<T>
): Array<T> {
  let i = 0,
    j = 0;
  let temp: Array<T> = [];

  while (i < array1.length || j < array2.length) {
    if (array1[i] <= array2[j]) {
      temp.push(array1[i]);
      i++;
      continue;
    }
    temp.push(array2[j]);
    j++;
  }
  return temp;
}
