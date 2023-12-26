var x= 1;
function foo ( ) {
    x=10;
    return;
    function x() {}
}
foo();console.log(x);


var name ="nazmul islam jewel";
(function() {
    console.log(name);
    var name = "nazmul islam jewel";

    
}) ();


const a=[0,1,2]
const b=[0,1,2]
console.log(a===b);



function add(item,arr) {
    return arr.push(item);
}
const result = add("c",["a","b"]);
console.log(result);