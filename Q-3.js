
// Q-3. Swap the values.

// You are working on a project that requires you to swap the values of two variables without using a temporary 
// variable. You decide to write a function that takes two variables as input and swaps their values using 
// destructuring assignment with an array. The function should take the two variables as arguments, destructure 
// them into an array, and then swap their positions within the array. Finally, the function should return an array 
// with the swapped values

function swapValues(x, y) {
 
    [x, y] = [y, x];
    return [x, y];
  }
  
  let x = 5;
  let y = 10;
  
  const swappedValues = swapValues(x, y);
  
  console.log(swappedValues); // Output: [10, 5]
  console.log(x); // Output: 10
  console.log(y); // Output: 5
  