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

//4. Linear time O(n). Input directly proportional to time. Loops through array.

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

//6. Exponential time O(2^n). Arr * Arr.

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

//7.  Linear time O(n). Establishes what to do for base cases. Pushes as many results needed to get to base cases.

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

//8. Logarithmic time O(log(n)). Array 1/2s elements.

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

//9. Constant time O(1). Time does not change with length.

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//10. Linear time O(n). Check each input.

function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

//Iterative solutions and identification

const countSheep = function (numOfSheep) {
  for (let i = 0; i < numOfSheep; i++) {
    console.log("Another sheep jumps over the fence");
  }

  console.log("All sheep jumped over the fence");
};

//O(n)

const powerCalculatorRec = function (base, exp) {
  let result = base;
  for (let i = 1; i < exp; i++) {
    result = result * base;
  }

  //O(n)

  return result;
};

function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}

//O(n)

const triangularNumber = function (nSide) {
  let dots = 1;
  for (let i = 2; i <= nSide; i++) {
    dots += i;
  }
  return dots;
};

//O(n)

const stringSplitter = function (string, split) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== split) {
      newString += string[i];
    }
  }
  return newString;
};

//O(n)
