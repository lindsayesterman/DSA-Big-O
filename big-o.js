//1. Constant time O(1). Regardless of input size, you only check once. 

//2. Linear time O(n). Check each input.

//3. Constant time O(1). Only 1 input value. Time has direct relationship with value.

function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

