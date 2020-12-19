//1a. Constant time O(1). Regardless of input size, you only check once.

//1b. Linear time O(n). Check each input.

//2. Constant time O(1). Only 1 input value. Time has direct relationship with value.

function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//3. Polynomial time O(n^k). Nested for loops that exponentially increase with time.

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

//4. Linear time O(n). Input directly proportional to time.

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

//5. Linear time O(n). Input directly proportional to time.

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

//6. Exponential time O(2^n). Nested for loops.

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

//7. Establishes what to do for base cases. 

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}
