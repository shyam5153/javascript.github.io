//variable

var a=10;
console.log(a);

var a=20;
var a=30;
console.log(a); //redeclar & reassign

function let() {
    let b=10;
    console.log(b);
    b=30;
    console.log(b); //redeclar but can be reassign
}
let();

const c=50;
console.log(c); //cannot be redeclar and reassign

//Data types

function datatype() {
    var a=10; //Number
    console.log(typeof(a));

    var b='dinesh'; //String
    console.log(typeof(b));

    var c='true'; //Boolean
    console.log(typeof(c));

    var y; // Undefined
    console.log(typeof(y));

    var z='null' // Null
    console.log(typeof(z));
}
datatype();

//Synchronous

function Synchronous() { 
    console.log("one");
    console.log("two");
    console.log("three");
    console.log("four");
    console.log("five"); 
}
Synchronous(); // it execute one after another dependently(blocking)

//Asynchronous

function asynchronous() {
    console.log("this");
    console.log("task");

    setTimeout(() => {
        console.log("javascript"); // execute after 5s
    }, 5000);

    console.log("all");
    console.log("about");
}
asynchronous(); // it allows to execute independently(non-blocking)