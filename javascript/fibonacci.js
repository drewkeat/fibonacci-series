function fibonacci(num) {
  let fib = [0, 1]
  if (num === 0 || num === 1) {
    return fib[num]
  }
  
  while (fib.length < num + 1) {
    let num1 = fib[fib.length - 2]
    let num2 = fib[fib.length - 1]
    fib.push(num1+num2)
  }
  return fib[num]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("Expecting 4181")
  console.log("=>", fibonacci(19))
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// fib = [0, 1]
// num === 0 || num === 1 return fib[num]
// num1 = fib[fib.length - 1]
// num2 = fib[fib.length - 2]
// for num - 2 times push sum(num1, num2)
// return fib[num]



// And a written explanation of your solution

// First, I will build an entry array with the first two digits of fibonacci ( [0, 1] )
// The function then checks to see if the input is 0 or 1.
// If so, the return will be 0 or 1 accordingly.
// Then, I will calculate the sum of the last two numbers of my "fib" array for the number of times of the input entry minus 2 for the original two entries.
// Lastly, the function will return the "fib" array with the index of the input based on 0 indexing.