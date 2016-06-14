import Filter from './filter.js';
import { dishes } from "./cooking-dishes.js";


var filter = new Filter();

export default function renderView(timer){
  console.log(timer);
  document.getElementById("timer-input").addEventListener("submit",function(event){
    startTimer(event,timer);
    initialSetHTMLTime(event,timer);
  });
}

var select = document.getElementById("selectDish");
var options = dishes;

function startTimer(event,timer){
  event.preventDefault();
  var selected = select.options[select.selectedIndex].value;
  var selectedDish = filter.getDishById(selected);
  var dishDiscrption = selectedDish.name;
  var dishMethod = selectedDish.method;
  timer.setTimer(selectedDish.time);
  document.getElementById('description').innerHTML = dishDiscrption;
  timer.startTimer();
}

function initialSetHTMLTime(event,timer){
  event.preventDefault();
  var selected = select.options[select.selectedIndex].value;
  var selectedDish = filter.getDishById(selected);
  var minutes = timer.getMinutes(selectedDish.time);
  var seconds = timer.getSeconds(selectedDish.time);
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
}

for(var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt.name + " (" + opt.method + ")";
  el.value = opt.id;
  select.appendChild(el);
};
