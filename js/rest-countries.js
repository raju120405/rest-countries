const loadCountries =() =>{
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data=> displayCounrty(data));
}

const displayCounrty = countries=>{
// console.log(countries);
const CountryHtml = countries.map(country=>getCountryHtml(country));
console.log(CountryHtml[0]);
const container = document.getElementById('countries');
container.innerHTML=CountryHtml.join('');
}

const getCountryHtml = country=>{
    // console.log(country.name)
    return`
    <div class="country">
    <h2>${country.name} </h2>
    <img src="${country.flags.png}">
    </div>

    `
}
loadCountries();