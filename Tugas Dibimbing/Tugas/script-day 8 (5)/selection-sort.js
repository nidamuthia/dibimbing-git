function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;// awal ditambung itu index ke 0
        for(let j = i+1; j < n; j++){

            console.log("arr j ", inputArr[j]);
            console.log("min " ,inputArr[min]);
            console.log('val ', inputArr[j] < inputArr[min]);

            if(inputArr[j] < inputArr[min]) { // berubah menjadi index j
                min=j; 
            }
         }
         console.log('min2 : ', min , i);
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i];  // 67
             inputArr[i] = inputArr[min]; // 24
             console.log(tmp); 
             console.log(inputArr[min]);
             inputArr[min] = tmp; 
             
        }
        console.log(arr);
    }
    return inputArr;
}

let arr = [20,67,24];

console.log(selectionSort(arr));