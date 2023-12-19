const name =[
    "jakaria",
    "maria",
    "mars",
    "jupiter",
    "solar",
    "earth"
]

name.splice(0,3 ,"jewel","nazmul");
console.log(name);


// const name =[
//     "jakaria",
//     "maria",
//     "mars",
//     "jupiter",
//     "solar",
//     "earth"
// ]

// console.log(name);




// const name =[
//     "jakaria",
//     "maria",
//     "mars",
//     "jupiter",
//     "solar",
//     "earth"
// ]
// const copyarr=[...name]
// copyarr.splice(copyarr.length,1 ,"jewel")
// console.log(copyarr);


// rest operator
const arr1=[1,2,3,4];
const arr2=[5,7,4,3];
const arr3=[6,5,6];

const totalarr=[...arr1,...arr2,...arr3];
console.log(totalarr);
// return array

// same as concatenation operator.
// const arr1=[1,2,3,4];
// const arr2=[5,7,4,3];
// const arr3=[6,5,6];
// const totalarr =arr1 + arr2 + arr3;
// console.log(totalarr); 
// It does not return an array



// concat method
// const arr1=[1,2,3,4];
// const arr2=[5,7,4,3];
// const arr3=[6,5,6];
// const totalarr = arr1.concat(arr2,arr3);
// console.log(totalarr);
// return array