const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

const searchKeyword = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const suggestionInnerHTML = suggestions.innerHTML;

searchKeyword.addEventListener('change', displayMatches);
searchKeyword.addEventListener('keyup', displayMatches);

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);

  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);
    const population = numberWithCommas(place.population);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${population}</span>
    `;
  }).join('');

  if (matchArray.length === cities.length) {
    suggestions.innerHTML = suggestionInnerHTML;
  } else {
    suggestions.innerHTML = html;
  }
}