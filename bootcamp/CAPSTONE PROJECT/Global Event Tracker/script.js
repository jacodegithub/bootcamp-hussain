// USING LEAFLET MAP 
// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

document.addEventListener('DOMContentLoaded', function() {
    // API URL 
    const apiUrl = `https://api.mockaroo.com/api/bebcf080?count=200&key=9ea192d0`

    // FETCHIN EVENTS DATA
    const mockFetchEvents = async () => {
        try {

            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const events_data = await response.json();
            console.log(events_data);
            setTimeout(() => {
                events_data.map(data => {
                    // console.log(data.location)
                    // addMarkerByCityName(data.location, data.date);
                })
            }, 5000)

        } catch (error) {
            console.error('Error fetching events data:', error.message);
        }
    };

    // ADDING MARKER FUNCTION
    function addMarkerByCityName(cityName, date) {
        const apiKey = 'e22906d0cf8c4a7d82fcd1c41a847725';
        const geocodingUrl = `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${apiKey}`;

        fetch(geocodingUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
            const location = data.results[0].geometry;
            const marker = L.marker([location.lat, location.lng]).addTo(map);
            marker.bindPopup(`City: ${cityName}, Date: ${date}`).openPopup();
            } else {
            console.error('Geocoding failed for the city:', cityName);
            }
        })
        .catch(error => {
        console.error('Error fetching geocoding data:', error.message);
        });
    }


    // HERO CAROUSAL 
    let count = 1;
    setInterval(function() {
        document.querySelector('#radio'+count).checked = true;
        count++;
        
        if(count > 4) {
            count = 1;
        }
    }, 4000)


    mockFetchEvents();
})


//   const zoom = 3;
//   const x = 5;
//   const y = 3;
//   const mapUrl = `https://api.tomtom.com/style/1/style/22.2.1-9/?key=bGGVPcKqkRAu1cLQcGO4SnqGEgVvBIBG&tileSize=512&map=2/basic_street-light&traffic_incidents=2/incidents_light&traffic_flow=2/flow_relative-light&poi=2/poi_light`
//   `https://api.tomtom.com/map/1/tile/basic/main/${zoom}/${x}/${y}.jpg?key=bGGVPcKqkRAu1cLQcGO4SnqGEgVvBIBG&tileSize=512`;
//   `https://api.tomtom.com/map/1/tile/basic/main/10/5/12.pbf?key=bGGVPcKqkRAu1cLQcGO4SnqGEgVvBIBG&view=Unified&language=NGT`
// https://api.tomtom.com/style/1/style/22.2.1-9?key=bGGVPcKqkRAu1cLQcGO4SnqGEgVvBIBG&map=2/basic_street-light&traffic_incidents=2/incidents_light&traffic_flow=2/flow_relative-light&poi=2/poi_light


//   const fetchMap = async () => {
//     try {

//       const response = await fetch(mapUrl);

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//         const mapImageBlob = await response.blob();
//         console.log(mapImageBlob);
//         // Create an object URL from the blob
//         const mapImageUrl = URL.createObjectURL(mapImageBlob);

//         // Log or use the map image URL as needed
//         console.log('Map Image URL:', mapImageUrl);
//         const mapImageElement = document.getElementById('mapImage');
//         mapImageElement.src = mapImageUrl;

//     } catch (error) {
//       console.error('Error fetching events data:', error.message);
//       // Handle the error, e.g., show a user-friendly message
//     }
//   };


// Call the fetchEvents function with the search parameters
// fetchEvents();
// fetchMap();



// FOR GENERATING MAPS 

  // Example: Adding a marker for a city (e.g., Paris)

// const searchBox = document.querySelector('.search-box')

// searchBox.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const searchVal = document.querySelector('.search-box input');

//     if (searchVal.value == '') {
//         searchVal.focus()
//         return;
//     }

//     const APIKEY = `3b7a61b69fcba80c3efdeb434adb36d6`;
//     const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchVal.value}&appid=${APIKEY}`

//     fetch(URL).then(res => res.json()).then(json => {
//         console.log(json)
//         if (json) {
//             let cur = json.current;
//             let loc = json.coord;
//             let latLon = [loc.lat, loc.lon];

//             L.circle(latLon, {
//                 color: 'red',
//                 fillColor: '#f03',
//                 fillOpacity: 0.5,
//                 radius: 10
//             }).addTo(map);

//             L.marker(latLon).addTo(map).bindPopup(`Location: ${json.name}, ${json.sys.country}<br>temperature: ${json.main.temp}&#8451;<br>
//             Humidity: ${json.main.humidity}%<br>
//             Weather: ${json.weather[0].description}`).openPopup();

//             map.panTo(latLon)
//         }
//     })
// })


// const apiKey = 'XHqhouklggXQZ2NCadGIAVke0ARZPPns';
// const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}`;

// // Function to fetch events data
// const fetchEvents = async () => {
//     try {

//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const eventsData = await response.json();

//         console.log('Events Data:', eventsData);

//     } catch (error) {
//         console.error('Error fetching events data:', error.message);
//         // Handle the error, e.g., show a user-friendly message
//     }
// };
