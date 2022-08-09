window.addEventListener("keydown", playSoundOnKeypress);

const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

keys.forEach(key => key.addEventListener("click", playSoundOnClick));

function playSoundOnKeypress(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function playSoundOnClick() {
  const dataKey = this.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  this.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

