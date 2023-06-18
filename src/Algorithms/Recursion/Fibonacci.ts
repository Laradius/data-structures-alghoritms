// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n: number) {
  let previousValue = 1;
  let previousValue2 = 0;


let current= 1;
  for (let i = 1; i < n; i++) {
    current = previousValue + previousValue2;
    previousValue2 = previousValue;
    previousValue = current;
    
  }

  return current;
}

function fibonacciRecursive(n: number) : number {
    if (n < 2) {
        return n;
    }
    
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(5))

console.log(fibonacciIterative(8));
