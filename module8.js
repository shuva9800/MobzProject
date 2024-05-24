//Debagging

// A function to find the maximum value in an array
function findMax(arr) {
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
      // Set a breakpoint here to pause execution
      debugger;
      
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    
    return max;
  }
  
  // Test data
  const numbers = [3, 7, 2, 8, 5];
  
  // Call the findMax function
  const maxNumber = findMax(numbers);
  
  console.log('The maximum number is:', maxNumber);