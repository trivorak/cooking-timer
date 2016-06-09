module.exports = renderView;
var convertToSeconds = require("./convertToSeconds.js");
var filter = require("./filter.js");
var dishes = require("./cooking-dishes.js");


var filter = new filter();

function renderView(timer){
  console.log(timer);
  document.getElementById("timer-input").addEventListener("submit",function(event){
    startTimer(event,timer);
  });
  }

// function startTimer(event,timer){
//   event.preventDefault();
//   var name = document.getElementById("name").value;
//   var dish = filter.getDish(name);
//   timer.setTimer(dish.time);
//   timer.startTimer();
//   }

var select = document.getElementById("selectDish");
var options = dishes;

function startTimer(event,timer){
  event.preventDefault();
  var selected = select.options[select.selectedIndex].value;
  var selectedDish = filter.getDishById(selected);
  timer.setTimer(selectedDish.time);
  timer.startTimer();
}

for(var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt.name + " (" + opt.method + ")";
  el.value = opt.id;
  select.appendChild(el);
};

console.log(dishes);
