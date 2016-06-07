var Timer = require("./timer.js");
var renderView = require("./timerView.js");
var dishes = require("./cooking-dishes.js");

var timer = new Timer();

renderView(timer);

window.timer = timer;
window.dishes = dishes;
