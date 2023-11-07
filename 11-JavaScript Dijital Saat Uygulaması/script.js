let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let interval = setInterval(() => {
  let date = new Date();
  hours.innerHTML = date.getHours();
  minutes.innerHTML = date.getMinutes();
  seconds.innerHTML = date.getSeconds();
}, 1000);
