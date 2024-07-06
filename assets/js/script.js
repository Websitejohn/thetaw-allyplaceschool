document.addEventListener("DOMContentLoaded", function() {
    // Select the popup and the close button
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("close-popup");
    
    // Function to open the popup
    function openPopup() {
        popup.style.display = "block";
    }
    
    // Function to close the popup
    function closePopup() {
        popup.style.display = "none";
    }
    
    // Event listener to close the popup when the close button is clicked
    closeButton.addEventListener("click", closePopup);
    
    // Open the popup automatically when the page loads
    openPopup();
});
