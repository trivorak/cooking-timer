module.exports = class Timer{

  constructor(){
    this.totalSeconds = 0;
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
    else{
      setTimeout(() =>{
        this.decreaseTime();
        this.logRemainingTime(this.totalSeconds);
        this.startTimer();
      } ,1000);
    }
  }

  decreaseTime(){
    this.totalSeconds = this.totalSeconds - 1;
  }

  logRemainingTime(time){
    console.log(this.getHumanReadableOutput(time));
  }

  getMinutes(totalSeconds){
    return Math.floor(totalSeconds/60);
  }

  getSeconds(totalSeconds){
    return totalSeconds % 60;
  }
}
