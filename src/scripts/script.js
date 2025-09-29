const hourIndex = document.getElementById("hora");
const minutesIndex = document.getElementById("minuto");
const secondsIndex = document.getElementById("segundo");

function loadClock() {
  const data = new Date();

  const hour = data.getHours().toString().padStart(2, "0");

  const minutes = data.getMinutes().toString().padStart(2, "0");

  const seconds = data.getSeconds().toString().padStart(2, "0");

  secondsIndex.innerHTML = seconds;
  hourIndex.innerHTML = hour;
  minutesIndex.innerHTML = minutes;
}

loadClock();

setInterval(loadClock, 1000);
