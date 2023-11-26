import { events_data } from "./eventData.js";

const eventData = events_data.slice(0, 10);


// DYNAMICALLY ADDING NAVBAR
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


// Get the event ID from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get('id');

// Getting the value of the 'imageUrl' parameter
const imageUrl = urlParams.get('imageUrl');

// You can fetch the event details using the event ID from your data source (e.g., eventData)
const selectedEvent = eventData.find(event => event.id == eventId);
console.log(selectedEvent);
// Render the event details
if (selectedEvent) {
    const eventDetailsContainer = document.getElementById('event-details');

    // Image container
    const imageContainer = document.createElement('div')
    imageContainer.classList.add('img-container')

    // Create elements to display event details
    const eventImg = document.createElement('img');
    eventImg.classList.add('event-img');
    eventImg.src = imageUrl;
    eventImg.alt = selectedEvent.name;

    const eventName = document.createElement('h2');
    eventName.textContent = `Organizer: ${selectedEvent.name}`;

    const eventDate = document.createElement('p');
    eventDate.textContent = `Date: ${selectedEvent.date}`;

    const eventLocation = document.createElement('p');
    eventLocation.textContent = `Location: ${selectedEvent.location}`;

    const eventDescription = document.createElement('p');
    eventDescription.textContent = selectedEvent.description;
    
    // Other card details
    const eventRating = document.createElement('p');
    eventRating.textContent = `Rating: ${generateStarRating(selectedEvent.rating)}`;

    const eventStatus = document.createElement('p');
    eventStatus.textContent = `Status: ${selectedEvent.status}`;

    const eventPrice = document.createElement('p');
    eventPrice.textContent = `Ticket Price: ${selectedEvent.ticket_price}`;
    
    const eventTime = document.createElement('p');
    eventTime.textContent = `Time: ${selectedEvent.timing}`;
    
    const eventParticipants = document.createElement('p');
    eventParticipants.textContent = `Participants: ${selectedEvent.participants}`;

    const detailsContainer = document.createElement('div')
    detailsContainer.classList.add('detials-container')

    const leftDetail = document.createElement('div')
    leftDetail.classList.add('left-details')

    const rightDetail = document.createElement('div')
    rightDetail.classList.add('right-details')

    // Adding elements to left-details div
    leftDetail.appendChild(eventName)
    leftDetail.appendChild(eventDate)
    leftDetail.appendChild(eventLocation)
    leftDetail.appendChild(eventTime);

    // Adding elements to right-details div
    rightDetail.appendChild(eventRating);
    rightDetail.appendChild(eventStatus);
    rightDetail.appendChild(eventPrice);
    rightDetail.appendChild(eventParticipants);

    // Adding left and right containers
    detailsContainer.appendChild(leftDetail);
    detailsContainer.appendChild(rightDetail);

    // Append elements to the container
    imageContainer.appendChild(eventImg);
    eventDetailsContainer.appendChild(imageContainer);
    eventDetailsContainer.appendChild(detailsContainer);
    eventDetailsContainer.appendChild(eventDescription);
} else {
    // Handle case where the event ID is not found
    alert('Event not found.');
    window.location.href = 'index.html'; // Redirect back to the events page
}


// DYNAMICALLY ADDING STARS
function generateStarRating(rating) {
    const fullStar = '★';
    const emptyStar = '☆';
    
    // Calculating the number of full stars
    const fullStars = Math.floor(rating);
    
    // Calculating the number of empty stars
    const emptyStars = 5 - fullStars;
    
    // Creating a string with the full and empty stars
    const ratingString = fullStar.repeat(fullStars) + emptyStar.repeat(emptyStars);
    
    return ratingString;
}