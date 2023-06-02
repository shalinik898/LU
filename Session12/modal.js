// Get the modal element
var modal = document.getElementById("modal");

// Get the button that opens the modal
var openModalBtn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Close modal when clicked outside the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Add event listeners to the button and close button
openModalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
