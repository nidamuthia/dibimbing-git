// Creating the bblSort function
function bblSort(arr) {

  for (let i = 0; i < arr.length; i++) { // 5 kali perulangan

    // Last i elements are already in place  
    for (let j = 0; j < (arr.length - i - 1); j++) {// sisa dari jumlah array

      // Checking if the item at present iteration 
      // is greater than the next iteration
      console.log('index j : ', j);
      console.log('val arr[j] : ', arr[j]);
      console.log('val arr[j+1] : ', arr[j + 1]);
      console.log('condition : ', arr[j] > arr[j + 1]);
      if (arr[j] > arr[j + 1]) {

        // If the condition is true then swap them
        let temp = arr[j]
        arr[j] = arr[j + 1] 
        arr[j + 1] = temp;
      }
      console.log(arr);
    }
  }
  // Print the sorted array
  console.log(arr);
}


// This is our unsorted array
let arr = [67, 24, 30, 70, 2];


// Now pass this array to the bblSort() function
bblSort(arr);