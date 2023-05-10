// Function to handle clicking the "Like" button
function likePost(button) {
    // Toggle the "liked" class on the parent card
    button.closest(".card").classList.toggle("liked");
  }

    //Like-btn
    function likePost() {
      // Get the like count element
      const likeCount = document.getElementById("like-count");
      
      // Increment the like count by 1
      const count = parseInt(likeCount.innerText) + 1;
      likeCount.innerText = count;
      
      // Replace the like text with a heart icon
      const likeBtn = document.getElementById("like-btn");
      likeBtn.innerHTML = '<div class="heart-icon">&#x1F497;</div>';
    }
  

  // Function to handle clicking the "Comment" button
  function showCommentField(button) {
    // Toggle the "d-none" class on the comment field
    button.closest(".card").querySelector(".comment-field").classList.toggle("d-none");
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
    button.closest(".comment-field").querySelector("input").value = "";
  }

  function setCommentFieldHeight(commentField) {
    // Set the height of the comment field based on its content
    const contentHeight = commentField.scrollHeight;
    commentField.style.height = `${contentHeight}px`;
  }
  
  // Call the setCommentFieldHeight function whenever the comment field's content changes
  const commentField = document.querySelector(".comment-field input");
  commentField.addEventListener("input", () => setCommentFieldHeight(commentField));


  

  
 // Get all "View" buttons
var viewButtons = document.querySelectorAll('.view-button');

// Add a click event listener to each "View" button
viewButtons.forEach(function(viewButton) {
  viewButton.addEventListener('click', function() {
    // Create the popup container
    var popupContainer = document.createElement('div');
    popupContainer.classList.add('popup');

    // Create the popup content
    var popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    // Clone the col element
    var colElement = viewButton.closest('.col');
    var colClone = colElement.cloneNode(true);

    // Append the cloned col element to the popup content
    popupContent.appendChild(colClone);

    // Append the popup content to the popup container
    popupContainer.appendChild(popupContent);

    // Append the popup container to the modal container
    var modalContainer = document.getElementById('modal-container');
    modalContainer.appendChild(popupContainer);

    // Close the popup when clicking outside the popup content
    popupContainer.addEventListener('click', function(event) {
      if (event.target === popupContainer) {
        popupContainer.remove();
      }
    });
  });
});