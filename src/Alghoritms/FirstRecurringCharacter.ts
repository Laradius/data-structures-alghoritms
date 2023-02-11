//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

export default function firstRecurringCharacter(input: Array<number>) {
  const digits: Set<number> = new Set<number>();
  for (let i = 0; i < input.length; i++) {
    if (digits.has(input[i])) {
      return input[i];
    }
    digits.add(input[i]);
  }

  return undefined;
}
