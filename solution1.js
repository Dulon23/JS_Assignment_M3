/* 1) javascript For in loop
 Write a JavaScript function named printObjectProperties that takes 
 an object as an argument and uses the for...in loop to print all the
 properties and their values in the following format: "property: value".
 If the object is empty, print "Object is empty". */

function printObjectProperties(obj) {
  if (Object.keys(obj).length === 0) {
    document.write("Object is empty");
  } else {
    for (let prop in obj) {
      document.write(`${prop}: ${obj[prop]}`+'<br>');
    }
  }
}
const myObject = {
  name: "Dulon",
  age: 24,
  profession: "Engineer"
};
printObjectProperties(myObject);
