export default function reverseString(str: string) {
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i]; //O(n)
  }
  return temp;
}
