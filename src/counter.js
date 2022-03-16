const counterHTML = document.querySelector("#counter");
const timeString = localStorage.getItem("Time");

function timeToAdd(stringTime) {
  const timeArray = stringTime.split(":");
  const hoursInMiliseconds = timeArray[0] * 60 * 60 * 1000;
  const minutesInMiliseconds = timeArray[1] * 60 * 1000;
  const TIME_IN_MILISECONDS = hoursInMiliseconds + minutesInMiliseconds;
  return TIME_IN_MILISECONDS;
}

const actualTime = Date.now();
const finalTimeDateObj = new Date(actualTime + timeToAdd(timeString));
const finalTime = finalTimeDateObj.getTime();

const time = (myInterval) => {
  const timeNow = Date.now();
  const diference = finalTime - timeNow;
  let displayTimeArray = msToTime(diference);
  console.log(diference);
  const hours = String(displayTimeArray[0]).padStart(2, "0");
  const minutes = String(displayTimeArray[1]).padStart(2, "0");
  const seconds = String(displayTimeArray[2]).padStart(2, "0");
  if (hours == "00" && minutes == "00" && seconds == "00") {
    clearInterval(myInterval);
  }
  counterHTML.innerText = `${hours}:${minutes}:${seconds}`;
};

function msToTime(millis) {
  var hours = Math.floor(millis / 360000000);
  var minutes = Math.floor(millis / 1000 / 60) % 60;
  var seconds = Math.floor(millis / 1000) % 60;
  console.log(hours, minutes, seconds);
  return [hours, minutes, seconds];
}

const myInterval = setInterval(time, 1000);
