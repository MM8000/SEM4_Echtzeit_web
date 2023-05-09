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


  

  
  // Select all "View" buttons
var viewButtons = document.querySelectorAll('.btn-group button:nth-child(1)');

// Loop through all "View" buttons and add a click event listener
viewButtons.forEach(function(viewButton) {
  viewButton.addEventListener('click', function() {
    // Get the parent element of the button (the card)
    var card = viewButton.closest('.card');
    // Get the card body element
    var cardBody = card.querySelector('.card-body');
    // Create a new popup window
    var popup = window.open('', 'popup', 'width=600,height=400,top=50,left=50');
    // Write the HTML content of the card body to the popup window
    popup.document.write(cardBody.innerHTML);
  });
});