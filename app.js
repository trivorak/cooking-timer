import { dishes } from "./cooking-dishes.js";
import TimerForm from "./TimerForm.js";

var timerForm = new TimerForm(".form-container", dishes);
timerForm.init();

console.log("Let's Get Cooking");
