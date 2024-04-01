function connect(){
    var searchTerm = document.getElementById("searchBox").value ;
    document.getElementById("searchBox").value ;
    var url = `https://restcountries.com/v3.1/name/${searchTerm}`;

    fetch(url)
    .then (res=> res.json())
    .then(data=> display(data))
}

function display(data){
    var oldContent = document.getElementById("container");
    oldContent.textContent = "";
    var country = data[0]; 
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <h2>${country.name.common}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
        <p>Time Zone: ${country.timezones}</p>
        
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}">

        <br> <br>

        <button onclick="getWeather('${country.capital}', '${country.alpha2Code}')">More Details</button>
    `;
    newDiv.classList.add("innerStyle"); 
    oldContent.appendChild(newDiv);
}

function getWeather(city, countryCode) {
    var apiKey = '01f1aad835e1da41d3e410084de72aff';
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(res =>res.json())
    .then(data => {
        var temperature = data.main.temp;
        alert(`Temperature in ${city}: ${temperature}°C`)
    })
}