//The way we execute .js and .css is not by opening them
//HTML is a glue that sticks .js and .css together

//Variable = let, const, var
//const --> variable value never going to change (most of the time)
//let --> creating a variable for the first time (sometimes)
//(VERY OLD) var --> value can be changed, no rule exists (never use)

let a = 5;
const b = 2;
let myName = "shuaaaa"; //Python way would be my_name

console.log(a + b); //prints something on 'Console'
console.log(a * b);
console.log(a / b);
console.log("hello "+myName);

myName = "SHUA" //if const myName at line 11, ERROR

console.log("hello "+myName);

//Boolean = true, false, null, undefined
const amIFat = null; //null = VALUE DOES NOT EXIST
let something; //null != undefined
console.log(something, amIFat); //prints 'undefined'

//Arrays
const nonsense = [1,2,"hello",false,null,true,undefined,"shua"];
console.log(nonsense);
console.log(nonsense[4]);

nonsense.push('push');
console.log(nonsense);

//Objects
const player = {
    name: "shua",
    points: 10,
    fat: true,
    sayHello: function(stranger){
        console.log("hello! " + stranger);
    }
}
console.log(player);
console.log(player.points);
console.log(player["points"]);

player.points = 30; //works while 'const'
player.lastname = "strawberry" //also works
console.log(player); //player itself is still the same, we're changing the value inside player, so 'const' is right

player.sayHello("lynn"); //built something similar to 'console.log'

const calculator = {
    add: function(a,b){
        console.log(a+b);
    },
    subtract: function(a,b){
        console.log(a-b);
    },
    divide: function(a,b){
        console.log(a/b);
    },
    power: function(a,b){
        console.log(a**b);
    }
}

calculator.add(5,2);
calculator.subtract(5,2);
calculator.divide(5,2);
calculator.power(5,2);

//Functions
function sayHello(nameOfPerson, age){
    console.log("Hello my name is "+ nameOfPerson + "and I'm "+age+" years old.")
}

sayHello("shua",10);
sayHello("dal",11);
sayHello("lynn",12);

function minusFive(potato){
    console.log(potato-5);
}
minusFive(10,10,12,34,3,4,5,6); //prints 5

//Returns
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner+2;
    console.log("hi") //does not execute
}

const krAge = calculateKrAge(96);
console.log(krAge);

//Conditionals
const age = parseInt(prompt("How old are you?")); //stops JS, we do not use this anymore
//if age = number,
console.log(age);
console.log(typeof parseInt(age)); //prints "number"
console.log(typeof age); //but prints "string", this is default
//if age = string,
console.log(typeof parseInt(age)); //prints "number"
console.log(typeof age); //but prints "string", this is default
console.log(parseInt(age)); //prints NaN


if (isNaN(age)|| age<0){
    console.log("Please write a number");
}else if (age<18){
    console.log("You are too young.");
}else if (age >= 18 && age <= 50){
    console.log("You can drink.");
}else if (age > 50 && age <= 80){
    console.log("You should exercise.");
}else if (age==100){
    console.log("wow you are wise.")
}else if (age>80){
    console.log("You can do whatever you want.")
}
