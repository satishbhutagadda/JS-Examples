// In JavaScript, you use variables to store values that can be primitive or references. 
// When you make a copy of a value stored in a variable, you create a new variable with the same value. 
// For a primitive value, you just simply use a simple assignment:

// A deep copying means that value of the new variable is disconnected from the original variable while 
// a shallow copy means that some values are still connected to the original variable.

// My understanding: 
// Shallow copy: It only copies the direct object reference, nested objects and arrays are still reference to original object. 
// So making any change in nested object reflect in original object as well!

// Deep copy: It copies the direct object reference and nested objects and array reference as well,
// So making any change in nested object will NOT reflect in original object.
// we can use structuredClone() method for deep copying in JS

// Shallow copy Example
const person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

const copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Jane'; // direct children props are disconnected

copiedPerson.address.street = 'Amphitheatre Parkway'; // address object reference is still to connected person.
copiedPerson.address.city = 'Mountain View'; // address object reference is still to connected person.

console.log(copiedPerson);
// output
// {
//     firstName: 'Jane',
//     lastName: 'Doe',
//     address: {
//         street: 'Amphitheatre Parkway',
//         city: 'Mountain View',
//         state: 'CA',
//         country: 'USA'
//     }
// }

console.log(person);
// output
// {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'Amphitheatre Parkway',
//         city: 'Mountain View',
//         state: 'CA',
//         country: 'USA'
//     }
// }

