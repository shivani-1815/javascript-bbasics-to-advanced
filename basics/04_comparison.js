// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // true automatically js convert 2 in number
// console.log("02" > 1);

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true  // reason that equality check == and comparisons ><>=<= works differently.comparison convert null to number treating it as 0 thats why null>=is true and null>0is false

console.log(undefined == 0);//false
console.log(undefined > 0);//fasle
console.log(undefined < 0);//false

// === check value as well as data type

console.log("2" === 2);//false