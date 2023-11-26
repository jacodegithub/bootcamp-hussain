import { events_data } from "./eventData.js";

const event_data = events_data.slice(0, 50);
console.log(event_data);

// DYNAMICALLY ADDING NAVBAR
const navbar = document.querySelector('#navbar')
fetch("./navbar.html").then(res => res.text()).then(data => {
    navbar.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    eval(doc.querySelector("script").textContent);
}
)
// DYNAMICALLY ADDING FOOTER
const footer = document.querySelector('#footer')
fetch("./footer.html").then(res => res.text()).then(data => {
    footer.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    eval(doc.querySelector("script").textContent);
})

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
let formFltrBtn = document.querySelector('#form-fltr-btn')

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
formFltrBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
})

// FUNCTION TO POPULATE FILTER OPTION
function populateFilterOption(events) {
    const uniqueNames = [...new Set(events.map(event => event.name))];
    populateSelectOptions('name-filter', uniqueNames)
    
    // const uniqueDates = [...new Set(events.map(event => event.date))];
    // populateSelectOptions('date-filter', uniqueDates)

    const uniqueLocations = [...new Set(events.map(event => event.location))];
    populateSelectOptions('location-filter', uniqueLocations)

    const uniqueCategories = [...new Set(events.map(event => event.category))];
    populateSelectOptions('category-filter', uniqueCategories)

    // const uniquePrices = [...new Set(events.map(event => event.ticket_price))];
    // populateSelectOptions('ticket-price-filter', uniquePrices)

    const uniqueStatus = [...new Set(events.map(event => event.status))];
    populateSelectOptions('status-filter', uniqueStatus)

    // const uniqueRating = [...new Set(events.map(event => event.rating))];
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

const ratingRange = document.querySelector('#ratingFilter');
const sliderValue = document.getElementById('sliderValue');
const rating = document.querySelector('.rate-filter')
rating.addEventListener('click', () => {
    const isHidden = ratingRange.classList.contains('hidden');
    // console.log(isHidden);
    if(!isHidden){
        ratingRange.classList.add('hidden');
    }else {
        ratingRange.classList.remove('hidden')
    }
})

const ticketPriceClick = document.querySelector('.ticket-price-filter')
ticketPriceClick.addEventListener('click', () => {
    const isHidden = document.querySelector('#priceFilter').classList.contains('hidden')
    if(isHidden) {
        document.querySelector('#priceFilter').classList.remove('hidden')
    }else {
        document.querySelector('#priceFilter').classList.add('hidden')
    }
})

// Update the displayed value when the rate slider changes
ratingRange.addEventListener('input', function () {
    sliderValue.textContent = ratingRange.value;
});

// Update the displayed value when the price slider changes
const priceFilter = document.querySelector('#priceFilter')
const priceSliderValue = document.querySelector('#priceSliderValue')
priceFilter.addEventListener('input', function () {
    priceSliderValue.textContent = priceFilter.value;
});


// FILTERING DATA AFTER GETTING INPUT
function applyFilters(events_data) {
    // console.log('in apply filters ',events_data);
    const nameFilter = document.querySelector('.name-filter')
    const dateFilter = document.querySelector('#dateFilter')
    const locationFilter = document.querySelector('.location-filter')
    const catFilter = document.querySelector('.category-filter')
    const ticketPriceFilter = document.querySelector('.ticket-price-filter')
    const statusFilter = document.querySelector('.status-filter')
    const rateFilter = document.querySelector('#ratingFilter')

    // CAPTURING FILTER FORM
    const filterForm = document.querySelector('.filter-form')
    const card_container = document.querySelector('.cards-container');
    
    filterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // card_container.innerHTML = ''
        // console.log(nameFilter.value, dateFilter.value, locationFilter.value, catFilter.value, ticketPriceFilter.value, statusFilter.value, rateFilter.value);
        

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
let lastIndexRendered = 0;

function renderingEventCards(events) {
    const card_container = document.querySelector('.cards-container');

    // Clear previous content
    if (lastIndexRendered === 0) {
    }
    card_container.innerHTML = '';
    console.log('render ', events.length);

    for (let i = 0; i < visibleDialogues && i < events.length; ++i) {
        console.log(lastIndexRendered, visibleDialogues);
        let eve_card = events[i];
        console.log(eve_card);
        let each_card = document.createElement('div');
        each_card.classList.add('eve-card');

        let card_img_container = document.createElement('div');
        card_img_container.classList.add('card-img-container');

        let card_img = document.createElement('img');
        // const url = fetchImageByCategory(eve_card.category)
        // console.log('image', url)
        // if (url) {
        //     card_img.src = url
        //     card_img.alt = topic.category.toLowerCase();
        //     console.log(card_img.src);
        //     card_img_container.appendChild(card_img);
        // }

        let card_details = document.createElement('div');
        card_details.classList.add('eve-card-details');

        let card_title = document.createElement('h3');
        card_title.classList.add('eve-card-title');

        let card_date = document.createElement('h4');
        card_date.classList.add('eve-card-date');

        let card_location = document.createElement('h4');
        card_location.classList.add('eve-card-loc');

        let card_status = document.createElement('h5');
        card_status.classList.add('eve-card-status');

        // console.log(eve_card.name);

        // adding image
        card_img.src = 'https://picsum.photos/200/300';
        card_img_container.appendChild(card_img);

        card_title.textContent = eve_card.name;
        card_date.textContent = eve_card.date;
        card_location.textContent = eve_card.location;
        card_status.textContent = eve_card.status;

        card_details.appendChild(card_title);
        card_details.appendChild(card_location);
        card_details.appendChild(card_date);
        card_details.appendChild(card_status);

        each_card.appendChild(card_img_container);
        each_card.appendChild(card_details);

            // Add an event listener to the card
        each_card.addEventListener('click', function () {
            // Redirect to the event details page, passing the event ID as a query parameter
            // console.log(card_img.src);
            const imageUrl = card_img.src
            console.log('imageUrl', imageUrl);
            window.location.href = 'event-details.html?id=' + eve_card.id + '&imageUrl=' + imageUrl;
        });

        card_container.appendChild(each_card);
    }

    lastIndexRendered = Math.min(visibleDialogues, events.length);
    
    document.querySelector('#view-more-btn').addEventListener('click', function () {
        // Increase the number of cards to show by 8
        visibleDialogues += 8;
        // Render the updated set of cards
        renderingEventCards(events);
        // Update cards-section height
        updateCardSectionHeight();
    });
}

const cardsSection = document.querySelector('.cards-section')
function updateCardSectionHeight() {
    const cardHeight = document.querySelector('.eve-card').offsetHeight; // Adjust 20 as needed for margins/padding
    console.log(document.querySelector('.eve-card'));
    console.log('card height', cardHeight);
    const newHeight =  (cardHeight / 3 * visibleDialogues);
    console.log('new height',newHeight);
    // Set the new height for the card section
    cardsSection.style.height = `${newHeight}px`;
}



// CALLING FUNCTIONS
mockFetchEvents();


// UNSPLASH API
async function fetchImageByCategory(category) {

    const accessKey = '6WQmaWsOC3AYk3BOPoVzI88fSUFbXhfzEu2J-gaj7DU';
    // const topics = ['nature', 'architecture', 'technology']; // Add more topics as needed
    const container = document.getElementById('image-container');
    event_data.forEach((topic) => {
        const apiUrl = `https://api.unsplash.com/photos/random?query=${topic.category.toLowerCase()}&client_id=${accessKey}&count=1`;
      
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            if (data && data.length > 0) {
              const image = document.createElement('img');
              image.src = data[0].urls.regular;
              image.alt = topic;
              console.log(image.src);
              container.appendChild(image);
            }
          })
          .catch(error => {
            console.error(`Error fetching images for ${topic}:`, error.message);
          });
      });
}



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
