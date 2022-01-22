function insertionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = inputArr[i];

        console.log('inputArr[i] : ', inputArr[i]);
        // The last element of our sorted subarray
        let j = i - 1;

        console.log('j : ', j);
        console.log('current', current);
        console.log('inputArr[j] : ', inputArr[j]);

        console.log('val ', (current < inputArr[j]));

        while ((j > -1) && (current < inputArr[j])) {

            console.log("J ", j);

            inputArr[j + 1] = inputArr[j];

            console.log('inputArr[j+1] : ', inputArr[j + 1]);
            j--;
            console.log(inputArr);
        }
        inputArr[j + 1] = current;

        console.log('inputArr[j+1] 2 : ', inputArr[j + 1]);
        console.log(inputArr);
    }
    return inputArr;
}

let inputArr = [5, 2, 4];
insertionSort(inputArr);
console.log(inputArr);