// Get elements for the popup
const popup = document.getElementById('image-popup');
const popupImg = document.getElementById('popup-img');
const closePopup = document.getElementById('close-popup');

// Get all the links in the gallery
const links = document.querySelectorAll('.popup-link');

// Function to open the image in the popup
function openPopup(event) {
    event.preventDefault();
    const imageUrl = event.target.parentNode.getAttribute('href');
    popupImg.src = imageUrl;
    popup.style.display = 'flex';
}

// Add event listeners to the thumbnails
links.forEach(link => {
    link.addEventListener('click', openPopup);
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close the popup if the background is clicked
popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
// script.js

// Function to handle form submission and update the invitation
document.getElementById('invitationForm').addEventListener('submit', function(event) {
    // Prevent the form from actually submitting
    event.preventDefault();

    // Declare variables to store form input values
    var recipientName = document.getElementById("recipientNameInput").value;
    var hostName = document.getElementById("hostNameInput").value;

    // Check if the input values are not empty (optional validation)
    if (recipientName.trim() === "" || hostName.trim() === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Replace the placeholders in the invitation with the entered names
    document.getElementById("recipientNamePlaceholder").innerHTML = recipientName;
    document.getElementById("hostNamePlaceholder").innerHTML = hostName;
});

// script.js

// Function to handle form submission and update the invitation
document.getElementById('invitationForm').addEventListener('submit', function(event) {
    // Prevent the form from actually submitting
    event.preventDefault();

    // Declare variables to store form input values
    var recipientName = document.getElementById("recipientNameInput").value;
    var hostName = document.getElementById("hostNameInput").value;

    // Check if the input values are not empty (optional validation)
    if (recipientName.trim() === "" || hostName.trim() === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Replace the placeholders in the invitation with the entered names
    document.getElementById("recipientNamePlaceholder").innerHTML = recipientName;
    document.getElementById("hostNamePlaceholder").innerHTML = hostName;
});

