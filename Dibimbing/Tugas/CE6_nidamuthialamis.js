let str="SelamatPagiDunia"

function manipulateString(str) {
    return str.split("").map((i, index)=>{
     if(index!==0)
      if(i !== i.toLowerCase())
       return " "+i;
     return i;
    }).join("");
   }
console.log (manipulateString(str))

