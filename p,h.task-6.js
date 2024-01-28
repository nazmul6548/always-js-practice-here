/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
// ans:
var myWeight = 77;
var myHeight = 2.99;
var myBMI = myWeight / (myHeight*myHeight);
if (myBMI < 18.5) {
    console.log("you are underweight");
    
}else if (myBMI >= 18.5 && myBMI <= 24.9) {
    console.log("you are normal");
}
else if (myBMI >=25 && myBMI <=29.9) {
    console.log("you are overweight");

}
else{
    console.log("you are obese");
}
    
