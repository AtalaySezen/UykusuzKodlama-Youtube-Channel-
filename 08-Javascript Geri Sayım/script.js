let newYear = new Date("Jan 1, 2024 00:00:00").getTime();
let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");
let timerContainer = document.getElementById("timerContainer");
let newYearContainer = document.getElementById("newYearContainer");

newYearContainer;
let interval = setInterval(function () {
  let now = new Date().getTime();
  let distance = newYear - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;

  if (distance <= 0) {
    clearInterval(interval);
    timerContainer.classList.add("none");
    newYearContainer.classList.remove("none");
  }
}, 1000);
