const counterHTML = document.querySelector("#counter");
const timeString = localStorage.getItem("Time");

document.querySelector("#resetBtn").onclick = () => {
  window.location.reload();
};

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

const time = () => {
  const timeNow = Date.now();
  const diference = finalTime - timeNow;
  let displayTimeArray = msToTime(diference);
  const hours = String(displayTimeArray[0]).padStart(2, "0");
  const minutes = String(displayTimeArray[1]).padStart(2, "0");
  const seconds = String(displayTimeArray[2]).padStart(2, "0");
  if (hours == "00" && minutes == "00" && seconds == "00") {
    clearInterval(myTimerInterval);
  }
  counterHTML.innerText = `${hours}:${minutes}:${seconds}`;
};

function msToTime(millis) {
  let h, m, s;
  h = Math.floor(millis / 1000 / 60 / 60);
  m = Math.floor((millis / 1000 / 60 / 60 - h) * 60);
  s = Math.floor(((millis / 1000 / 60 / 60 - h) * 60 - m) * 60);
  return [h, m, s];
}

const myTimerInterval = setInterval(time, 1000);
