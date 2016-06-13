export default class Timer{

  constructor(){
    this.totalSeconds = 0;
    this.stopFlag = false;
  }

  setTimer(seconds){
    this.totalSeconds = (seconds);
  }

  //Converts time(in seconds) into a readable minutes:seconds (ex. 2:35)
  getHumanReadableOutput(seconds){
    var minuteValue = this.getMinutes(seconds);
    var secondValue = this.getSeconds(seconds);
    secondValue = String(secondValue);

      if (secondValue.length <= 1){
        secondValue = "0" + secondValue
      }
      else{
      }

      var humanReadableOutput = minuteValue + ":" + secondValue;

      return humanReadableOutput;
  }

  startTimer(){
    if (this.totalSeconds <= 0){
      console.log("Finished");
    }
    else if (this.stopFlag === true) {
      console.log("Stopped");
    }
    else{
      setTimeout(() =>{
        this.decreaseTime();
        // this.logRemainingTime(this.totalSeconds);
        this.startTimer();
        this.updateHTMLTime();
      } ,1000);
    }
  }

  decreaseTime(){
    this.totalSeconds = this.totalSeconds - 1;
  }

  getMinutes(totalSeconds){
    return Math.floor(totalSeconds/60);
  }

  getSeconds(totalSeconds){
    var secondValue = totalSeconds % 60;
    secondValue = String(secondValue);
    if (secondValue.length <= 1){
      secondValue = "0" + secondValue
    }
    else{
    }

    return secondValue;

  }

  stopTimer(){
    this.stopFlag = true ;
  }

  resumeTimer(){
    this.stopFlag = false;
    this.startTimer();
  }

  resetTimer(){
    this.totalSeconds = 0;
    this.updateHTMLTime(this.totalSeconds);
  }

  updateHTMLTime(totalSeconds){
    document.getElementById('minutes').innerHTML = this.getMinutes(this.totalSeconds);
    document.getElementById('seconds').innerHTML = this.getSeconds(this.totalSeconds);
  }
}
