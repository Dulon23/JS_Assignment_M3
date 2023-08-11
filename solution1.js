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
