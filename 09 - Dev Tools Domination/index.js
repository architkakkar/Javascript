const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

const p = document.querySelector("p");

function makeGreen() {
  p.textContent = "× go, have a look at console ×";
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello, I am Archit.");

// Interpolated
console.log('Hello, I am %s string.', 'cool');

// Styled
console.log('%c I am some great text', 'font-size: 50px; background: yellow;');

// warning!
console.warn("OH NOOO");

// Error :|
console.error("It's an Error!");

// Info
console.info("Crocodiles eat 3-4 people per year.");

// Testing
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  // console.groupCollapsed(`${dog.name}`); // will create a collasped group.
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/aniloona31')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// table
console.table(dogs);