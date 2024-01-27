// *******************************
// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.
// *******************************
// ans:
var a = isNaN("11"); 
console.log(a);
// it's true
var ab = isNaN("iiii");
console.log( ab);
// it's false
function sanitise(x) {
    if (isNaN(x)) {
      return NaN;
    }
    return x;
  }
  
  console.log(sanitise('1'));
  // Expected output: "1"
  
  console.log(sanitise('NotANumber'));
  // Expected output: NaN
var as = valueIsNaN(NaN);
console.log(as);  

isNaN("hello world"); // true
Number.isNaN("hello world"); // false
