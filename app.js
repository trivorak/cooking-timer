var Timer = require("./timer.js");
var renderView = require("./timerView.js");

var timer = new Timer();

renderView(timer);

window.timer = timer;
