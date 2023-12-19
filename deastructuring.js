// deastructuring for arrays




// const myName =["nazmul", "jewel", "islam"];

// const [firstName, lastName,middleName] = myName;

// console.log(firstName,middleName, lastName);




const yourName ={
    name: "nazmul", age: 28,
    id: 34444, agee:23,
}

const {...rest} = yourName;
// console.log(name);
// console.log(boyos);
console.log(rest);




const yoyo = (...array) => {
    return array.length;
}
console.log(yoyo(100,200,3000,6,7,8,9,5,63,));