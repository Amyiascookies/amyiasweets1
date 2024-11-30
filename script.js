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
