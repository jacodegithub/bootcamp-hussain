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


// Get the event ID from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get('id');

// You can fetch the event details using the event ID from your data source (e.g., eventData)
const selectedEvent = eventData.find(event => event.id == eventId);

// Render the event details
if (selectedEvent) {
    const eventDetailsContainer = document.getElementById('event-details');

    // Create elements to display event details
    const eventImg = document.createElement('img');
    eventImg.classList.add('event-img');
    eventImg.src = selectedEvent.image;
    eventImg.alt = selectedEvent.name;

    const eventName = document.createElement('h2');
    eventName.textContent = selectedEvent.name;

    const eventDate = document.createElement('p');
    eventDate.textContent = `Date: ${selectedEvent.date}`;

    const eventLocation = document.createElement('p');
    eventLocation.textContent = `Location: ${selectedEvent.location}`;

    const eventDescription = document.createElement('p');
    eventDescription.textContent = selectedEvent.description;

    // Append elements to the container
    eventDetailsContainer.appendChild(eventImg);
    eventDetailsContainer.appendChild(eventName);
    eventDetailsContainer.appendChild(eventDate);
    eventDetailsContainer.appendChild(eventLocation);
    eventDetailsContainer.appendChild(eventDescription);
} else {
    // Handle case where the event ID is not found
    alert('Event not found.');
    window.location.href = 'index.html'; // Redirect back to the events page
}