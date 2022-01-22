 function seqSearch(arr, x) { 
 for (let i = 0; i < arr.length; i++) {
 if (arr[i] == x) {
      return true;
    }
  } 
    return false; 
 }

let arr = [10,22,67,75,80,66];
let x = 12;

seqSearch(arr,x) ? console.log(x + " is in the array.") 
       : console.log(x + " is not in the array.");

