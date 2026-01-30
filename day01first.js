// // Prinitng command in nodejs
// console.log("Hello nodejs")



// // VARIABLE DECLARATION
// // var scope is global, let scope is local
// {
//     var a = 10
//     let b = 26
//     console.log(b) // Printing b outside this control block will give error
// }
// console.log(a) // a, declared with var is global, and henceforth accessible here



// // FUNCTION DECLARATION (Normal)
// function add(a, b) {
//     return a + b
// }
// // Function calling
// console.log(add(10, 26))



// // ARROW FUNCTION DECLARATION
// var add1 = (a, b) => a + b
// console.log(add1(13,24))


// // Pritning variables along with strings
// // "\n" for new line
// var a = 10
// var b = 13
// console.log("The value of a is", a, "and the value of b is", b)
// console.log(`The value of a is ${a}. \nThe value of b is ${b}.`)



// Objects in JS - Collection of key-value pairs
var obj1 = { name: "Pri", 
    city: "Bgp", 
    // greet1:function() => "hello!!";,
    greet2: () => "hello!!!"
}

console.log(`The name is ${obj1.name} and city ${obj1.city}`)