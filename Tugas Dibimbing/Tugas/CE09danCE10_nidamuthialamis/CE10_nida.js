function reverse(str) {
   var splitString = str.split("");
   var reverseArray = splitString.reverse();
   var joinArray = reverseArray.join("");
   return(joinArray.charAt(0).toUpperCase() + joinArray.slice(1)+ ("."));
   }

function unitTest(input, output) {
   console.log(output, input === output)
}
 
unitTest(reverse("drow olleh"), "Hello word.")
unitTest(reverse("eko atad"), "Data oke.")
unitTest(reverse("gnitset tinu"), "Unit testing.")



