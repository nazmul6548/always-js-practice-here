// for loop

for (let inde = 0; inde <= 40; inde+=3) {
    
    // console.log(inde);
}

// while looop
let count = 0;
while (count <= 40) {
    // console.log(count);
    count=count+2;
}


// for loop with condition in array
let name =["nazmul","islam","jewel","lamia","fuhad"];
for (let i = 0; i < name.length; i++) {
    // console.log(name[i]);
    if (i ===2) {
       
        break;
    }
    
}


const number =[2,3,4,5,6,7,8,9,10,11,12,13];
for (let i = 0; i < number.length; i++) {
    // console.log(number[i]);
    if (i===7) {
        // console.log("ami index 7 pai geci");
        break
    }
}

// for loop with condition
for (let i = 0; i <= 40; i++) {
    console.log(i);
    if (i=== 20) {
        console.log("ami 20 pai geci");
        break;
    }
    
}