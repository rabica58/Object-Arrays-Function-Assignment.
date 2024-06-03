// Assignment 1 //
var people = {
    freinds: []
};
var friend1 = {
    firstName: "Muneeba",
    lastName: "zahra",
    id: 123
};
var friend2 = {
    firstName: "kinza",
    lastName: "fatima",
    id: 456
};
var friend3 = {
    firstName: "ayesha",
    lastName: "hoorain",
    id: 789
};
people.freinds.push(friend1, friend2, friend3);
console.log([people]);
// Assignment 2 //
// Question: Manipulating an Array: Rearranging words
var scrambledArray = ["student", "of", "true", "123", "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAIC";
console.log(scrambledArray.join());
var inventory = {
    product: []
};
var productA = {
    name: "watch",
    colour: "black",
    cost: 2000,
    quantity: 50
};
var productB = {
    name: "shoes",
    colour: "white",
    cost: 2000,
    quantity: 35
};
var productC = {
    name: "Honor",
    colour: "black",
    cost: 24100,
    quantity: 100
};
inventory.product.push(productA);
inventory.product.push(productB);
inventory.product.push(productC);
console.log(inventory.product[2].quantity);
var productD = {
    name: "shirt",
    colour: "green",
    cost: 800,
    quantity: 400
};
inventory.product.push(productD);
console.log(inventory.product[3]);
console.log(inventory.product[3].quantity);
console.log(inventory);
var student = [
    {
        name: "maham",
        seniorstatus: false,
        completedAssignment: true
    },
    {
        name: "fiza",
        seniorstatus: true,
        completedAssignment: true
    },
    {
        name: "bisma",
        seniorstatus: false,
        completedAssignment: false
    },
    {
        name: "hira",
        seniorstatus: true,
        completedAssignment: false
    },
];
Function;
console.log(student);
var seniorstudentwithAssignment = function (student) {
    return student.filter(function (student) { return student.seniorstatus && student.completedAssignment === true; });
};
console.log(seniorstudentwithAssignment(student));
function removestudent(student) {
    return student.filter(function (student) { return student.completedAssignment === false; });
}
;
console.log(removestudent);
