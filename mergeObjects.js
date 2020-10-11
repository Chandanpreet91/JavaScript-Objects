function merge(obj_a, obj_b) {
    let new_obj = {};
    for (const key in obj_a) {
      new_obj[key] = obj_a[key];
    }
    for (const key in obj_b) {
      new_obj[key] = obj_b[key];
    }
    return new_obj;
  }
console.log(merge({a: 1, b: 2}, {c: 3, d: 4})); 
console.log(merge({firstName: 'Ron', lastName: 'Wesley', occupation: 'Wizard'},{firstName: 'Harry', lastName: 'Potter'}));
  
 // returns {firstName: 'Harry', lastName: 'Potter', occupation: 'Wizard'}*/)


/*Write a function, merge, that takes two objects,objA & objB respectively
 then returns a new object with all keys of objA & objB. 
 objA & objB should not be mutated when calling this function. 
 If objects objA & objB share keys, objB's key should take precedence over objA's.



You can not use Object.assign.



Example:



merge({a: 1, b: 2}, {c: 3, d: 4}); // return {a: 1, b: 2, c: 3, d: 4}

// with shared keys

*/