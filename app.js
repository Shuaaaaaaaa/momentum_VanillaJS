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
}
console.log(player);
console.log(player.points);
console.log(player["points"]);

player.points = 30; //works while 'const'
player.lastname = "strawberry" //also works
console.log(player); //player itself is still the same, we're changing the value inside player, so 'const' is right
