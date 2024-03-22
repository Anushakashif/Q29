"use strict";
// 29. Favorite Fruits: Make a array of your favorite fruits, and then write a series of independent if statements that 
// check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in 
// your array, the if block should should print a statement, 
// such as you really like bananas.
const favorite_fruits = ["Apple", "Orange", "Berries"];
if (favorite_fruits.includes("Apples")) {
    console.log("you really like apples!");
}
if (favorite_fruits.includes("Orange")) {
    console.log("you really like oranges!");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("you really like grapes!");
}
else
    (console.log("Grapes are not in your favorite_fruits list"));
if (favorite_fruits.includes("Berries")) {
    console.log("you really like Berries!");
}
if (favorite_fruits.includes("Banana")) {
    console.log("you really like bananas");
}
else {
    console.log("Bananas are not in you favorite_fruits list");
}
