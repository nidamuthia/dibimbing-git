var a = "Software";
var b= {};
for (let i=0;i<a.length;i++){
    if((a.match(new RegExp(a[i], "g"))).length >= 0){
        b[a[i]]=(a.match(new RegExp(a[i], "g"))).length;
    }
}
console.log(b);

var str = "this is foo bar";
var A= str.length - str.replace(/o/g,'').length;

console.log (A)