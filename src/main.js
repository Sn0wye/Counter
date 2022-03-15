const form = document.querySelector("form");
const timeInput = document.querySelector(".timeInput");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(timeInput.value);
});

console.log(form);
