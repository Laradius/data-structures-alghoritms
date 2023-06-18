function findFactorialRecursive(number :number): number {
  
    if (number === 2) {
      return number;
    }

    return number * findFactorialRecursive(number - 1);


   // return answer;
  }
  
  function findFactorialIterative(number: number) {

    let answer = 1;
    for (let i = number; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }

  console.log(findFactorialIterative(2));
  console.log(findFactorialRecursive(5));