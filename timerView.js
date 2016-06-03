module.exports = renderView;
var convertToSeconds = require("./convertToSeconds.js");

function renderView(timer){
  console.log(timer);
  document.getElementById("timer-input").addEventListener("submit",function(event){
    startTimer(event,timer);
  });
  }

function startTimer(event,timer){
  event.preventDefault();
  var minutes = document.getElementById("minutes").value;
  var seconds = document.getElementById("seconds").value;
  minutes = parseInt(minutes);
  seconds = parseInt(seconds);
  timer.setTimer(convertToSeconds(minutes,seconds));
  timer.startTimer();
}
