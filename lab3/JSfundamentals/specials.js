function f() {
    // no semicolon needed after function declaration
  }
  
  for(;;) {
    // no semicolon needed after the loop
  }
  typeof null == "object" // error in the language
  typeof function(){} == "function" // functions are treated specially

  
  let userName = prompt("Your name?", "Alice");
  let isTeaWanted = confirm("Do you want some tea?");
  
  alert( "Visitor: " + userName ); // Alice
  alert( "Tea wanted: " + isTeaWanted ); // true
  

// expression on the right side
let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;