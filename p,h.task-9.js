/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
var number1 =7;
var number2 = 9;
let results;
if (number1 > number2) {
    results =(number1 * 2);
    console.log(results);
    
}else if (number1 < number2) {
    results = number1 + number2;
    console.log(results);
}


// **********ternary*********//
results= (number1 > number2) ? number1 * 2 : number1 + number2;
console.log(results);
