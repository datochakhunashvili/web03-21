// var firstName = "Dato";
// var lastName = "Chakhunashvili";
// var age = 40;
// var married = true
// console.log("my name is " + firstName + " " + lastName + " " + " and I am " + age + " " + " years old "  + " I am married " + married);
// console.log(`my name is ${firstName} ${lastName} and I am ${age} years old I am married: ${married}`);
// let x = 50;
// let y = 10;
// console.log(x+y);
// console.log(x-y);
// console.log(x/y);
// console.log(x*y);
// let x = 7*2;
// let y = 5*2;
// console.log(x+y);


let number1 = {
    Number: 20,
};
let number2 = {
    Number: 45, 
};
let number3 = {
    Number: 22,
};
let number4 = {
    Number: 35,
};
let number5 = {
    Number: 50,
};

let numbers = [number1, number2, number3, number4, number5];

console. log(number1 + number2 + number3 + number4 + number5);


let person1 = {
    name: "dato",
    age: 35,
    address: {
        city: "Tbilisi",
        Number: 25,
        street: "wereteli",
    }
};
let person2 = {
    name: "giorgi",
    age: 25,
    address: {
        city: "Tbilisi",
        Number: 150,
        street: "saburtalo",
    }
};
let person3 = {
    name: "andria",
    age: 20,
    address: {
        city: "Tbilisi",
        Number: 12,
        street: "vake",
    }
};

let persons = [person1, person2, person3];
console.log( persons [0].name, persons [1].age, persons [2].address.street);


if (person2.age < 19 ) {
    console.log("I am a teenager");
} else {
    console. log("I am an adult")
}