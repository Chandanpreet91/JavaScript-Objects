/*Write a JavaScript program to get the length of a JavaScript object. Go to the editor
Sample object :*/
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

let osize = 0, key;
    for (key in student) {
        if (student.hasOwnProperty(key)) 
        osize++;
    }
console.log(osize);