import { events_data } from "./eventData.js";

const event_data = events_data.slice(0, 5);

// RENDERING MAPS
const navbar = document.querySelector('#navbar')
fetch("./navbar.html").then(res => res.text()).then(data => {
    navbar.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    eval(doc.querySelector("script").textContent);
})


// DYNAMICALLY ADDING FOOTER
const footer = document.querySelector('#footer')
fetch("./footer.html").then(res => res.text()).then(data => {
    footer.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    eval(doc.querySelector("script").textContent);
})


// USING LEAFLET MAP 
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// FOR GENERATING MAPS 

  // Example: Adding a marker for a city (e.g., Paris)

const searchBox = document.querySelector('.search-box')

searchBox.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchVal = document.querySelector('.search-box input');

    if (searchVal.value == '') {
        searchVal.focus()
        return;
    }

    const APIKEY = `3b7a61b69fcba80c3efdeb434adb36d6`;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchVal.value}&appid=${APIKEY}`

    fetch(URL).then(res => res.json()).then(json => {
        console.log(json)
        if (json) {
            let cur = json.current;
            let loc = json.coord;
            let latLon = [loc.lat, loc.lon];

            L.circle(latLon, {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 10
            }).addTo(map);

            L.marker(latLon).addTo(map).bindPopup(`Location: ${json.name}, ${json.sys.country}<br>temperature: ${json.main.temp}&#8451;<br>
            Humidity: ${json.main.humidity}%<br>
            Weather: ${json.weather[0].description}`).openPopup();

            map.panTo(latLon)
        }
    })
})

function addMarkerByCityName(obj) {
    const apiKey = 'e22906d0cf8c4a7d82fcd1c41a847725';
    const geocodingUrl = `https://api.opencagedata.com/geocode/v1/json?q=${obj.location}&key=${apiKey}`;

    fetch(geocodingUrl)
    .then(response => response.json())
    .then(data => {
        if (data.results && data.results.length > 0) {
        const location = data.results[0].geometry;
        const marker = L.marker([location.lat, location.lng]).addTo(map);
        marker.bindPopup(`City: ${obj.location}, 
            Date: ${obj.date}, 
            Organizer: ${obj.name}, 
            Status: ${obj.status}, 
            Rating: ${obj.rating}, 
            Time: ${obj.timing}`).openPopup();
        } else {
        console.error('Geocoding failed for the city:', obj.location);
        }
    })
    .catch(error => {
    console.error('Error fetching geocoding data:', error.message);
    });
}

setTimeout(() => {
    event_data.map(data => {
        // console.log(data);
        // addMarkerByCityName(data);
    })
}, 5000)

