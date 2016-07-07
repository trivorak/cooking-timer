export default class Timer{

  constructor(){
    this.totalSeconds = 0;
    this._isRunning = false;
    this._timerId = null;
    this._onChangeCallbacks = [];
  }

  setTimer(seconds){
    this.totalSeconds = seconds;
  }

  //Converts time(in seconds) into a readable minutes:seconds (ex. 2:35)
  getHumanReadableOutput(){
    var minuteValue = this.getMinutes();
    var secondValue = this.getSeconds();
    secondValue = String(secondValue);

      if (secondValue.length <= 1){
        secondValue = "0" + secondValue
      }

      var humanReadableOutput = minuteValue + ":" + secondValue;

      return humanReadableOutput;
  }

  startTimer(){
    if (this._isRunning) return;
    this._isRunning = true;

    this._timerId = setInterval(() => {
      if (this.totalSeconds <= 0) {
        this.stopTimer();
        console.log("Finished");
        return;
      }

      this.decreaseTime();
      // this.logRemainingTime(this.totalSeconds);
      this._onChangeCallbacks.forEach(cb => cb());
    }, 1000);
  }

  decreaseTime(){
    this.totalSeconds = this.totalSeconds - 1;
  }

  getMinutes(){
    return Math.floor(this.totalSeconds/60);
  }

  getSeconds(){
    var secondValue = this.totalSeconds % 60;
    secondValue = String(secondValue);
    if (secondValue.length <= 1){
      secondValue = "0" + secondValue
    }

    return secondValue;

  }

  stopTimer(){
    clearInterval(this._timerId);
    this._isRunning = false;
  }

  resumeTimer(){
    this.startTimer();
  }

  resetTimer(){
    this.totalSeconds = 0;
    this._onChangeCallbacks.forEach(cb => cb());
  }

  onChange(callback) {
    this._onChangeCallbacks.push(callback);
  }
}
