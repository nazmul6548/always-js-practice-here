/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
// ans:
var studentScore = 101;
if( studentScore >= 90 && studentScore <= 100) {
    console.log("your grade is A");
} else if( studentScore >= 80 && studentScore <=89) {
    console.log("your grade is B");
} else if( studentScore >= 70 && studentScore <= 79) {
    console.log("your grade is C");
}else if ( studentScore >= 60 && studentScore <= 69) {
    console.log("your grade is D");
}else if ( studentScore >= 0 && studentScore <= 59) {
    console.log("your grade is F");
}
else{
    console.log("we are count 0 - 100");
}
