function bblSort(arr) {

    for (let i = 0; i < arr.length; i++) { 
      for (let j = 0; j < (arr.length - i - 1); j++) {
       
        if (arr[j] > arr[j + 1]) {
  
          let temp = arr[j]
          arr[j] = arr[j + 1] 
          arr[j + 1] = temp;
        }
      }
    }
    
    console.log(arr);
  }
  
  
  let arr = [10,22,67,75,80,66];
  bblSort(arr) 



