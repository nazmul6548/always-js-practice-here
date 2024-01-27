/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
// ans:
// var myScore = 80;
// var myFriendScore = 30;
// if (myScore >= 80 && myFriendScore >= 80) {
//     console.log("go for a lunch");

// } else if ((myScore >= 80) && (80 > myFriendScore && myFriendScore >= 60)) {
//     console.log("good luck next time");

// }else if ((myScore >= 80) && ( 60 > myFriendScore && myFriendScore >= 40)) {
//     console.log("keep your friend's message unseen");

// }else if ((myScore >= 80) && (myFriendScore < 40)) {
//     console.log("block your friend");

// }else if (myScore < 80 && myFriendScore <80) {
//     console.log("let's go we are crying together");

// }
// else {
//     console.log("personally you go to home and sleep and act sad");
// }

var myScore = 80;
var myFriendScore = 30;

if (myScore >= 80) {
  if (myFriendScore >= 80) {
    console.log("go for a lunch");
  } else if (myFriendScore >= 60 && myFriendScore < 80) {
    console.log("good luck next time");
  } else if (myFriendScore >= 40 && myFriendScore < 60) {
    console.log(" keep your friend's message unseen");
  } else if (myFriendScore < 40) {
    console.log("block your friend");
  }
} else {
  console.log("go to home and sleep and act sad");
}
