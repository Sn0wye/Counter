const form = document.querySelector("form");
const timeInput = document.querySelector(".timeInput");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(timeInput.value);
  if (timeInput.value !== "") {
    localStorage.setItem("Time", timeInput.value);
    window.location.href = "./pages/counter.html";
  }
});
