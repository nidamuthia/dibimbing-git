let str = "Selamat Pagi Duniaa!!";
let vowels =[`a`,`i`,`u`,`e`,`o`]
function countVowels (str) {
let counts =0
for (let i=0;i<str.length; i++){
    if (vowels.includes (str[i])) {
        counts ++;
    }
}
return counts ;
}

console.log(countVowels(str, vowels))


