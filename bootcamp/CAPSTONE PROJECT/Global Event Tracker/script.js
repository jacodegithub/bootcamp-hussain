import { event_data } from "./eventData.js";

// USING LEAFLET MAP 
// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);




// AUTOMATIC SLIDING CAROUSAL FUNCTION
document.addEventListener('DOMContentLoaded', function() {
    // HERO CAROUSAL 
    let count = 1;
    setInterval(function() {
        document.querySelector('#radio'+count).checked = true;
        count++;
        
        if(count > 4) {
            count = 1;
        }
    }, 4000)
    
})

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

// DATA API URL
const apiUrl = `https://api.mockaroo.com/api/bebcf080?count=100&key=9ea192d0`

// FETCHING DATA
const mockFetchEvents = async () => {
    try {

        // const response = await fetch(apiUrl);

        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }

        // const events_data = await response.json();
        console.log(event_data);

        applyFilters(event_data);
        populateFilterOption(event_data);
        renderingEventCards(event_data);

        setTimeout(() => {
            event_data.map(data => {
                // console.log(data.location)
                // addMarkerByCityName(data.location, data.date);
            })
        }, 5000)

    } catch (error) {
        console.error('Error fetching events data:', error.message);
    }
};

// TYPES
const heroIcon = document.querySelectorAll('.icons');
heroIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        console.log(icon.childNodes[3].textContent);
    })
})


// MAKING FILTER FUNCTIONS
let openFilterButton = document.querySelector('#filter-btn');
let formContainer = document.querySelector('.form-container')
let closeForm = document.querySelector('.form-close')

openFilterButton.addEventListener('click', () => {
    formContainer.style.display = 'block';
})
closeForm.addEventListener('click', () => {
    formContainer.style.display = 'none';
})
window.addEventListener('click', (e) => {
    if(e.target === formContainer) {
        formContainer.style.display = 'none';
    }
})

// FUNCTION TO POPULATE FILTER OPTION
function populateFilterOption(events) {
    const uniqueNames = [...new Set(events.map(event => event.name))];
    populateSelectOptions('name-filter', uniqueNames)
    
    const uniqueDates = [...new Set(events.map(event => event.date))];
    // populateSelectOptions('date-filter', uniqueDates)

    const uniqueLocations = [...new Set(events.map(event => event.location))];
    populateSelectOptions('location-filter', uniqueLocations)

    const uniqueCategories = [...new Set(events.map(event => event.category))];
    populateSelectOptions('category-filter', uniqueCategories)

    const uniquePrices = [...new Set(events.map(event => event.ticket_price))];
    // populateSelectOptions('ticket-price-filter', uniquePrices)

    const uniqueStatus = [...new Set(events.map(event => event.status))];
    populateSelectOptions('status-filter', uniqueStatus)

    const uniqueRating = [...new Set(events.map(event => event.rating))];
    // populateSelectOptions('rate-filter', uniqueRating)

}

function populateSelectOptions(selectId, options) {
const selectElement = document.querySelector(`.${selectId}`);
options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
});
}

const ratingRange = document.getElementById('ratingFilter');
const sliderValue = document.getElementById('sliderValue');

// Update the displayed value when the slider changes
ratingRange.addEventListener('input', function () {
    sliderValue.textContent = ratingRange.value;
});


// FILTERING DATA AFTER GETTING INPUT
function applyFilters(events_data) {
    console.log(events_data);
    const nameFilter = document.querySelector('.name-filter')
    const dateFilter = document.querySelector('#dateFilter')
    const locationFilter = document.querySelector('.location-filter')
    // const filter = document.querySelector('.category-filter')
    const catFilter = document.querySelector('.category-filter')
    const ticketPriceFilter = document.querySelector('.ticket-price-filter')
    const statusFilter = document.querySelector('.status-filter')
    const rateFilter = document.querySelector('#ratingFilter')

    // CAPTURING FILTER FORM
    const filterForm = document.querySelector('.filter-form')
    
    filterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        console.log(nameFilter.value, dateFilter.value, locationFilter.value, catFilter.value, ticketPriceFilter.value, statusFilter.value, rateFilter.value);
        

        const filteredData = events_data.filter(data => {
            const eventCat = data.category.toLowerCase();
            const eventDate = data.date;
            const eventDetails = data.description;
            const eventLocation = data.location.toLowerCase();
            const eventOrganizer = data.name.toLowerCase();
            const eventParticipantFeedback = data.participant_Feedback;
            const eventTotalParticipants = data.participants;
            const eventRating = Math.floor(data.rating);
            const eventStatus = data.status.toLowerCase();
            const eventTicketPrice = data.ticket_price.replace(/[^0-9]/, '');
            const eventAddress = data.venue;
    
            // console.log(eventStatus, statusFilter.value.toLowerCase())
            // console.log('date', eventDate.split('/')[2]);

            return(
                (nameFilter.value == '' || eventOrganizer.includes(nameFilter.value.toLowerCase())) &&
                (dateFilter.value == '' || eventDate.includes(dateFilter.value)) &&
                (catFilter.value == '' || eventCat.includes(catFilter.value.toLowerCase())) &&
                (locationFilter.value == '' || eventLocation.includes(locationFilter.value.toLowerCase())) &&
                (statusFilter.value == '' || eventStatus == statusFilter.value.toLowerCase()) &&
                (rateFilter.value == 0 || eventRating === Math.floor(rateFilter.value)) 
            )
    
        })

        // renderingEventCards(filteredData) 
        console.log('filtered data', filteredData)
        setTimeout(() => {
            renderingEventCards(filteredData)
        }, 3000)

    })    
}


// RENDERING EVENT CARDS 
let visibleDialogues = 8;
function renderingEventCards(events) {
    const card_container = document.querySelector('.cards-container');
    
    console.log('render ', events.length);
    // Clear previous content
    card_container.innerHTML = '';
    
    for(let i=0;i < 8 && i<events.length; ++i) {
        
        let eve_card = events[i];

        let each_card = document.createElement('div')
        each_card.classList.add('eve-card')

        let card_img_container = document.createElement('div')
        card_img_container.classList.add('card-img-container')

        let card_img = document.createElement('img')
        
        let card_details = document.createElement('div')
        card_details.classList.add('eve-card-details')

        let card_title = document.createElement('h3')
        card_title.classList.add('eve-card-title')

        let card_date = document.createElement('h4')
        card_date.classList.add('eve-card-date')

        let card_location = document.createElement('h4')
        card_location.classList.add('eve-card-loc')

        let card_status = document.createElement('h5')
        card_status.classList.add('eve-card-status')

        // console.log(eve_card.name);

        // adding image
        card_img.src = eve_card.image
        card_img_container.appendChild(card_img)

        card_title.textContent = eve_card.name;
        card_date.textContent = eve_card.date;
        card_location.textContent = eve_card.location;
        card_status.textContent = eve_card.status;

        card_details.appendChild(card_title)
        card_details.appendChild(card_date)
        card_details.appendChild(card_location)
        card_details.appendChild(card_status)

        each_card.appendChild(card_img_container)
        each_card.appendChild(card_details)

        card_container.appendChild(each_card)
    }


    // let view_more_btn = document.querySelector('#view-more-btn')

    // let visibleDialogues = 8;
    // for(let i=0; i<visibleDialogues; ++i) {

    // }
}

// RESTRICTING NUMBER OF CARDS IN CONTAINER
// document.querySelector('#view-more-btn').addEventListener('click', function () {
//     // Increase the number of cards to show by 8
//     numCardsToShow += 8;
//     // Render the updated set of cards
//     renderEventCards(events);
// });



/*

category
: 
"Cooking"
coordinates
: 
"Sydney (33.8688° S"
date
: 
"9/11/2018"
description
: 
"Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat."
id
: 
1
image
: 
"https://example.com/images/event6.jpg"
location
: 
"Dublin"
name
: 
"Sarah Thompson"
organizer
: 
"Wikido"
organizer_Details
: 
"Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla."
participant_Feedback
: 
"Great job!"
participants
: 
963
popularity_Score
: 
4.6
rating
: 
4.4
status
: 
"Active"
ticket_price
: 
"$02,409.97"
venue
: 
"Apt 231"
*/

// CALLING FUNCTIONS
mockFetchEvents();

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
