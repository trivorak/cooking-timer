var Timer = require("./timer.js");
var renderView = require("./timerView.js");
var dishes = require("./cooking-dishes.js");
var Filter = require("./filter.js");

var timer = new Timer();
var filter = new Filter();

console.log("Let's Get Cooking");

renderView(timer);

window.timer = timer;
window.dishes = dishes;
window.filter = filter;
