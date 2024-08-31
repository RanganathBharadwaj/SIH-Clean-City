// Function to get the user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Function to handle the successful retrieval of location
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // Now you can use latitude and longitude to fetch nearby services
    console.log("Latitude: " + latitude + ", Longitude: " + longitude);
    // Example: Redirect to a page with the location in the URL
    window.location.href = `waste_management_services.html?latitude=${latitude}&longitude=${longitude}`;
}

// Function to handle errors in getting the location
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
