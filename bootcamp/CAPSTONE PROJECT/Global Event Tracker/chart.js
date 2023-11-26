import { events_data } from "./eventData.js";

const eventData = events_data.slice(0, 100);

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

// Set up date picker
flatpickr("#datePicker", {
    mode: "range",
    dateFormat: "d/m/Y",
    onChange: updateChart,
  });
  
  // Initial data for all time periods
  let currentData = getEventDataForDateRange('01-01-2021', '31-12-2023');
  
  // Set up the pie chart
  const ctx = document.getElementById('eventTypePieChart').getContext('2d');
  const eventTypePieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [...new Set(eventData.map(item => item.category))],
      datasets: [{
        data: calculateCategoryProportion(currentData),
        backgroundColor: getRandomColors(currentData.length),
      }],
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  });
  
  // Function to update the chart based on the selected time period
  function updateChart(selectedDates, dateStr, instance) {
    const startDate = selectedDates[0];
    const endDate = selectedDates[1];
  
    // Ensure that both start and end dates are selected
    if (startDate && endDate) {
      const formattedStartDate = startDate.toISOString().split('T')[0];
      const formattedEndDate = endDate.toISOString().split('T')[0];
  
      currentData = getEventDataForDateRange(formattedStartDate, formattedEndDate);
  
      // Update the chart data
      eventTypePieChart.data.datasets[0].data = calculateCategoryProportion(currentData);
      eventTypePieChart.data.labels = [...new Set(currentData.map(item => item.category))];
      eventTypePieChart.data.datasets[0].backgroundColor = getRandomColors(currentData.length);
  
      // Update the chart
      eventTypePieChart.update();
    }
  }
  
  
  // Function to filter event data based on the selected date range
  function getEventDataForDateRange(startDate, endDate) {
    return eventData.filter(item => {
      const eventDate = new Date(item.date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$1-$2-$3"));
      console.log(eventDate);
      return eventDate >= new Date(startDate) && eventDate <= new Date(endDate);
    });
  }
  
  // Function to calculate category proportion for the pie chart
  function calculateCategoryProportion(data) {
      console.log('data',data);
    const categoryCounts = {};
    data.forEach(item => {
      categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
    });
    console.log(categoryCounts)
    return Object.values(categoryCounts);
  }
  
  // Function to generate random colors
  function getRandomColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`);
    }
    return colors;
  }


// document.addEventListener('DOMContentLoaded', function () {
//     // Get the context of the canvas element
//     var ctx = document.querySelector('#myChart').getContext('2d');

//     // Create a bar chart
//     var myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//             datasets: [{
//                 label: 'Number of Votes',
//                 data: [12, 19, 3, 5, 2, 3],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 255, 0, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 165, 0, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 255, 0, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 165, 0, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// });