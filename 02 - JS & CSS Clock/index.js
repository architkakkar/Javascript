const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const digitalClockSecond = document.querySelector(".second")
const digitalClockMinute = document.querySelector(".minute")
const digitalClockHour = document.querySelector(".hour")

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = ((seconds / 60) * 360) + 90;
  const minuteDeg = ((minutes / 60) * 360) + 90;
  const hourDeg = ((hours / 12) * 360) + 90;

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  digitalClockHour.innerHTML = `${('0'+hours).slice(-2)}`;
  digitalClockMinute.innerHTML = `${('0'+minutes).slice(-2)}`;
  digitalClockSecond.innerHTML = `${('0'+seconds).slice(-2)}`;
}

setInterval(setDate, 1000);