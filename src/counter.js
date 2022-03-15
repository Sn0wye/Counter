const hourNum = document.querySelector("#hourNum");
const minNum = document.querySelector("#minNum");
const secNum = document.querySelector("#secNum");

const timeString = localStorage.getItem("Time");
const timeArray = timeString.split(":");
const HOURS_IN_SECONDS = Number(timeArray[0]) * 60 * 60; // takes the first array and converts into seconds
const MINUTES_IN_SECONDS = Number(timeArray[1]) * 60; // takes the second array and converts into seconds
let TIME_IN_SECONDS = HOURS_IN_SECONDS + MINUTES_IN_SECONDS;

console.log(TIME_IN_SECONDS);

const time = (value) => {
  const clock = new Date();
  const hours = clock.getHours();
  const minutes = clock.getMinutes();
  const seconds = clock.getSeconds();

  hourNum.innerHTML = hours < 10 ? `0${hours}` : hours;
  minNum.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secNum.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  console.log(clock);
};

setInterval(time, 1000);
