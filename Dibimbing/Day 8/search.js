
// // sequencial
// function seqSearch(arr, data) { 
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] + " " + data); 
//         if (arr[i] == data) {
//             return true;
//         }
//     } 
//     return false; 
// }


// let num = 25;
// let nums = [20,21,25,90,46,25];

// seqSearch(nums,num) ? console.log(num + " is in the array.") 
//                 : console.log(num + " is not in the array.");


// // binary search
let iterativeFunction = function (arr, x) {
  
    let start = 0, end = arr.length-1;
    
    while (start <= end){

        console.log("start", start);
        console.log("end", end);
 
        // Find the mid index
        let mid = Math.floor((start + end)/2);
        console.log('Median : ', mid);
        console.log('val mid : ', arr[mid]);

        console.log("condition", arr[mid] < x);
  
        // If element is present at mid, return True
        if (arr[mid] === x) return true;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}

let arr = [1, 3, 5, 7, 8, 9, 10];
let x = 10;

iterativeFunction(arr, x) ? console.log("Element found!") 
                        :  console.log("Element not found!");
