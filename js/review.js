document.addEventListener("DOMContentLoaded", () => {
  const ratingStars = document.querySelectorAll(".rating_starss span");
  let selectedRating = 0;

  // Add event listener for each star
  ratingStars.forEach((star, index) => {
    star.setAttribute("data-value", index + 1); // Ensure data-value is set correctly

    star.addEventListener("click", function () {
      // Get the value of the clicked star
      selectedRating = parseInt(this.getAttribute("data-value"));

      // Remove the 'selected' class from all stars
      ratingStars.forEach((s) => s.classList.remove("selected"));

      // Add 'selected' class to the clicked star and all previous ones
      ratingStars.forEach((s, i) => {
        if (i < selectedRating) {
          s.classList.add("selected");
        }
      });
    });
  });

  // Handle form submission
  document
    .querySelector(".review-form button")
    .addEventListener("click", function (e) {
      e.preventDefault();

      const reviewText = document.querySelector(".review-form textarea").value;

      if (reviewText && selectedRating > 0) {
        const reviewList = document.querySelector(".review-list");

        // Create new review item div
        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");

        // Create review-rating div
        const reviewRating = document.createElement("div");
        reviewRating.classList.add("review-rating");

        // Add date
        const reviewDate = document.createElement("p");
        reviewDate.classList.add("review-date");
        reviewDate.innerText = new Date().toLocaleDateString();

        // Add rating stars
        const reviewStars = document.createElement("span");
        reviewStars.innerHTML =
          "★".repeat(selectedRating) + "☆".repeat(5 - selectedRating);

        // Append the date and stars to the rating div
        reviewRating.appendChild(reviewDate);
        reviewRating.appendChild(reviewStars);

        // Create review text
        const reviewTextElement = document.createElement("p");
        reviewTextElement.classList.add("review-text");
        reviewTextElement.innerText = reviewText;

        // Create author name
        const reviewAuthor = document.createElement("p");
        reviewAuthor.classList.add("review-author");
        reviewAuthor.innerText = "Anonymous"; // Default author name

        // Append rating, text, and author name to the reviewItem
        reviewItem.appendChild(reviewRating);
        reviewItem.appendChild(reviewTextElement);
        reviewItem.appendChild(reviewAuthor);

        // Append the new review item to the review list
        reviewList.appendChild(reviewItem);

        // Reset form
        document.querySelector(".review-form textarea").value = "";
        ratingStars.forEach((s) => s.classList.remove("selected"));
        selectedRating = 0;
      } else {
        alert("Please provide a rating and a review.");
      }
    });
});
