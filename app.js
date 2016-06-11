import Timer from "./timer.js";
import renderView from "./timerView.js";
import dishes from "./cooking-dishes.js";
import Filter from "./filter.js";

var timer = new Timer();
var filter = new Filter();

console.log("Let's Get Cooking");

renderView(timer);
