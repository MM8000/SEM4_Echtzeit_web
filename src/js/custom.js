// someTHING!
var imgmovement = document.getElementsByClassName("thing");
var debounceTimer;

for (var i = 0; i < imgmovement.length; i++) {
  imgmovement[i].style.transition = "all 0.2s ease-in-out"; // add transition to all images
  imgmovement[i].style.pointerEvents = "none"; // make the images click-through
}

document.onmousemove = function(event) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(function() {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";

    for (var i = 0; i < imgmovement.length; i++) {
      imgmovement[i].style.left = x;
      imgmovement[i].style.top = y;
      imgmovement[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
  }, 10); // debounce time in milliseconds
};




// Function to handle clicking the "Like" button
function likePost(button) {
  // Toggle the "clicked" class on the button
  button.classList.toggle("clicked");

  // Get the parent col element
  const col = button.closest(".col");

  // Get the like count element within the same col element
  const likeCount = col.querySelector(".like-count");

  // Increment the like count by 1
  const count = parseInt(likeCount.innerText) + 1;
  likeCount.innerText = count;

  // Remove the "clicked" class after a short delay
  setTimeout(function() {
    button.classList.remove("clicked");
  }, 200);
}


  // Function to handle clicking the "Comment" button
  function showCommentField(button) {
    
    //no show!
    //var commentField = button.closest('.card-body').querySelector('.custom-comment-field');
  //commentField.classList.toggle('d-none');
  //commentField.querySelector('input').focus();
    
  // Toggle the "d-none" class on the comment field
    button.closest(".card").querySelector(".custom-comment-field").classList.toggle("d-none");
  }
  
  // Function to handle submitting a comment
  function submitComment(button) {
    // Get the text entered in the comment field
    const commentText = button.closest(".card").querySelector("input").value;
    
    // Create a new <p> element to hold the comment text
    const commentElement = document.createElement("p");
    commentElement.textContent = commentText;
    
    // Add the comment element to the parent card
    const cardBody = button.closest(".card-body");
    cardBody.insertBefore(commentElement, cardBody.lastChild);
    
    // Clear the comment field
    button.closest(".custom-comment-field").querySelector("input").value = "";
  }

  function setCommentFieldHeight(commentField) {
    // Set the height of the comment field based on its content
    const contentHeight = commentField.scrollHeight;
    commentField.style.height = `${contentHeight}px`;
  }
  
  // Call the setCommentFieldHeight function whenever the comment field's content changes
  const commentField = document.querySelector(".custom-comment-field input");
  commentField.addEventListener("input", () => setCommentFieldHeight(commentField));

  
  function toggleActive(button) {
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
      button.style.backgroundColor = '#f0f0f0';
      button.style.color = '#000';
      button.style.fontWeight = 'bold';
    } else {
      button.style.backgroundColor = '';
      button.style.color = '';
      button.style.fontWeight = '';
    }
  }

 // Get all "View" buttons
var viewButtons = document.querySelectorAll('.custom-view-button');

// Add a click event listener to each "View" button
viewButtons.forEach(function(viewButton) {
  viewButton.addEventListener('click', function() {
    // Remove the "active" class from all "View" buttons
    viewButtons.forEach(function(button) {
      button.classList.remove('active');
    });
    
    // Add the "active" class to the clicked "View" button
    viewButton.classList.add('active');

    // Create the popup container
    var popupContainer = document.createElement('div');
    popupContainer.classList.add('custom-popup');

    // Create the popup content
    var popupContent = document.createElement('div');
    popupContent.classList.add('custom-popup-content');

    // Clone the col element
    var colElement = viewButton.closest('.col');
    var colClone = colElement.cloneNode(true);

    // Append the cloned col element to the popup content
    popupContent.appendChild(colClone);

    // Append the popup content to the popup container
    popupContainer.appendChild(popupContent);

    // Append the popup container to the modal container
    var modalContainer = document.getElementById('custom-modal-container');
    modalContainer.appendChild(popupContainer);

    // Close the popup when clicking outside the popup content
    popupContainer.addEventListener('click', function(event) {
      if (event.target === popupContainer) {
        popupContainer.remove();
      }
    });
  });
});