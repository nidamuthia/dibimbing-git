let array = [31, 9, 54, 11, 43, 6, 67];
min = array[0];
max = array[0];

for (let i = 0; i <= 13; i++) {
    if (array[i] < min)
        min = array[i];
    if (array[i] > max)
        max = array[i];

}
console.log("{max:" + max + ", " + "min:" + min + "}");
