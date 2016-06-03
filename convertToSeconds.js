module.exports = convertToSeconds;

//Returns converts time in minutes and seconds
function convertToSeconds(min,sec){
  let minutes = parseInt(min * 60);
  let seconds = parseInt(sec);
  return parseInt(minutes + seconds);
}
