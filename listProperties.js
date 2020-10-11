 /*Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
Sample object:*/
 let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

    console.log(Object.keys(student));
  /*  Write a JavaScript program to delete the rollno property from the following object. 
  Also print the object before or after deleting the property. Go to the editor*/
let student1 = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
console.log( student1);
delete student1.rollno;
console.log( student1);

