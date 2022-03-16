const counter = document.querySelector("#counter");

const timeString = localStorage.getItem("Time");
const timeArray = timeString.split(":");

const countTime = new Date().setHours(timeArray[0], timeArray[1], 0);
const TIME_IN_SECONDS = timeArray[0] * 60 * 60 + timeArray[1] * 60;

const time = (interval) => {
  const distance = new Date(countTime - now);
  const hours = String(distance.getHours()).padStart(2, "0");
  const minutes = String(distance.getMinutes()).padStart(2, "0");
  const seconds = String(distance.getSeconds()).padStart(2, "0");
  if (hours == "00" && minutes == "00" && seconds == "00") {
    clearInterval(myInterval);
  }
  counter.innerText = `${hours}:${minutes}:${seconds}`;
  countTime;
};

const myInterval = setInterval(time, 1000);

/*
function time(TIME_IN_SECONDS) {
  const clock = new Date(TIME_IN_SECONDS * 1000);
  console.log(clock);
  return clock.toLocaleTimeString("pt-br", {
    timeZone: "UTC",
  });
}

function initialClock() {
  timer = setInterval(function () {
    seconds--;
    clock.innerHTML = time(seconds);
  }, 1000);
}
*/
