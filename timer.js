var totalSeconds = 0;

//Set timer directly in seconds
function setTimer(seconds){
totalSeconds = parseInt(seconds);
}

//Converts time in minutes and seconds and then sets timers duration directly
function convertToSeconds(min,sec){
  let minutes = parseInt(min * 60);
  totalSeconds = parseInt(min + sec);
}

//Converts time(in seconds) into a readable minutes:seconds ex. 2:35
function getHumanReadableOutput(seconds){
  let minuteValue = Math.floor(seconds / 60);
  let secondValue = seconds % 60;
  secondValue = String(secondValue);

    if (secondValue.length <= 1){
      secondValue = "0" + secondValue
    }
    else{
    }

  let humanReadableOutput = minuteValue + ":" + secondValue;

  return humanReadableOutput;
}

//Startup Countdown Timer
function startTimer(){
  if (totalSeconds <= 0){
    console.log("Yo Shit's Done!");
  } else {
    setTimeout(() =>{
      decreaseTime();
      logRemainingTime(totalSeconds);
      startTimer();
      },1000);
  }
}

//Subtracts 1 from the total time at the interval of the timerLoop
function decreaseTime(){
  totalSeconds = totalSeconds - 1;
}

//function for console log display using the getHumanReadableOutput function for formatting
function logRemainingTime(time){
  console.log(getHumanReadableOutput(time));
}
