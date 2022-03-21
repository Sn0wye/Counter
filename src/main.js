const form = document.querySelector("form");
const timeInput = document.querySelector(".timeInput");
const startButton = document.querySelector("startButton");
const error = document.querySelector("#error");
window.addEventListener("keydown", keyPress);

function keyPress({ key }) {
  const button = document.querySelector(`[data-key='${key}']`);
  button?.click();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(timeInput.value);
  if (timeInput.value === "00:00") {
    error.className = "error";
  } else if (timeInput.value !== "") {
    localStorage.setItem("Time", timeInput.value);
    window.location.href = "./pages/counter.html";
  }
});
