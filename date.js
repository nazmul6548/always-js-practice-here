// date object


// without arguments
const curretDate = new Date();
console.log(curretDate);

// with date string
const dateString = '2022-03-16'
const currentdate = new Date(dateString);
console.log(currentdate);

// with year month day
const fixedDate = new Date(2023,11,15);
console.log(fixedDate);

// with milisecond
const milisecond = 1875555554875;
const dateFromMilliseconds = new Date(milisecond)
console.log(dateFromMilliseconds);

// date component
const now = new Date();
const year = now.getFullYear();
console.log(year);



const now1 = new Date();
const month = now1.getMonth();
console.log(month);



const now2 = new Date();
const day = now2.getDay();
console.log(day);

// todatestring
const now3 = new Date();
console.log(now3.toDateString());

// totimestring
const now4 = new Date();
console.log(now4.toTimeString());

// tolocalstring
const now5 = new Date();
console.log(now5.toLocaleString());


const now7 = new Date();
const day1 = now7.getDay();
console.log(day1);