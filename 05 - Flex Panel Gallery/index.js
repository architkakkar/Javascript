const panels = document.querySelectorAll(".panel");

panels.forEach(panel => panel.addEventListener("click", addOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleOpenActive));

function addOpen() {
  removeActiveClasses();
  this.classList.add("open");
}

function toggleOpenActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle("open-active");
  }
}

function removeActiveClasses() {
  panels.forEach(panel => {
      panel.classList.remove('open')
  })
}



// document.querySelectorAll(".panel").addEventListener("click", () => {
//   this.classList.toggle("open");
// });
