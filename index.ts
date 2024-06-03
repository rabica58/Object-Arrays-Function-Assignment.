                    // *Assignment 1* //

// Question: Building your Freind List.

type Freind = {
    firstName: string,
    lastName: string,
    id?: number,
}

let people: {freinds: Freind[]} = {
    freinds: []
};

let friend1 = {
    firstName: "Muneeba",
    lastName: "zahra",
    id: 123
};
let friend2 = {
    firstName: "kinza",
    lastName: "fatima",
    id: 456
};
let friend3 = {
    firstName: "ayesha",
    lastName: "hoorain",
    id: 789
};
people.freinds.push(friend1, friend2, friend3);
console.log([people]);

                      // *Assignment 2* //

 // Question: Manipulating an Array: Rearranging words.

 const scrambledArray = ["student", "of", "true", "123", "am", "a", "GIAIC", "I"]  
 scrambledArray.splice(2,2);
 scrambledArray.pop();
 scrambledArray.unshift("I");
 scrambledArray[1]= "am";
 scrambledArray[2]= "a";
 scrambledArray[3]= "student";
 scrambledArray[4]= "of";
 scrambledArray[5]= "GIAIC";
 console.log(scrambledArray.join());
 
                    // *Assignment 3* //

// Question: Company product catalog.

type product = {
name: string;
colour: string;
cost: number;
quantity: number;
};

let inventory: {product: product[]} = {
    product: []
}
let productA: product = {
    name: "watch",
    colour: "black",
    cost: 2000,
    quantity: 50
};

let productB: product = {
    name: "shoes",
    colour: "white",
    cost: 2000,
    quantity: 35
};

let productC: product = {
    name: "Honor",
    colour: "black",
    cost: 24100,
    quantity: 100
};
inventory.product.push(productA)
inventory.product.push(productB)
inventory.product.push(productC)

console.log(inventory.product[2].quantity);

let productD: product = {
    name: "shirt",
    colour: "green",
    cost: 800,
    quantity: 400
};
inventory.product.push(productD)

console.log(inventory.product[3])

console.log(inventory.product[3].quantity);
console.log(inventory);

                      // *Assignment 4* //

 // Question: Student List Organizer.

 interface student {
    name: string,
    seniorstatus: boolean,
    completedAssignment: boolean,
 }; 
 
 let student: student [] = [
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

 Function
console.log(student);
 
 const seniorstudentwithAssignment = (student: student[]) => {
    return student.filter(student => student.seniorstatus && student.completedAssignment === true);
 };
 console.log(seniorstudentwithAssignment(student));

 function removestudent(student: student[])  {
    return student.filter(student =>student.completedAssignment ===false);
 };
 console.log(removestudent);
 

 
 







