var Timer = require("./timer.js");
var renderView = require("./timerView.js");
var dishes = require("./cooking-dishes.js");

var timer = new Timer();

console.log("Let's Get Cooking");

//Filter Dishes by Cooking Method
function sortByMethod(method){
  return dishes.filter(function(dish){
    return dish.method === method;
  });
}

//Filter Dishes by Name
function sortByName(name){
  return dishes.find(function(dish){
    return dish.name === name;
  });
}

var dish = sortByName('Checkers Fries');
timer.setTimer(dish.time);

renderView(timer);

window.timer = timer;
window.dishes = dishes;
