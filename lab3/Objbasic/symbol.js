let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false


let user = { // belongs to another code
    name: "John"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
  
  alert( user[id] ); // we can access the data using the symbol as the key

  
  let id = Symbol("id");
  let user = {
    name: "John",
    age: 30,
    [id]: 123
  };
  
  for (let key in user) alert(key); // name, age (no symbols)
  
  // the direct access by the symbol works
  alert( "Direct: " + user[id] ); // Direct: 123
  
  