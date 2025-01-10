document.addEventListener("DOMContentLoaded", () => {
  const moreInfoButtons = document.querySelectorAll(".more-info-btn");
  const popup = document.getElementById("popup");
  const popupImage = document.querySelector(".popup-image");
  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");
  const closeBtn = document.querySelector(".close-btn");

  // Open popup and populate content
  moreInfoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".image-card");
      const image = card.querySelector(".card-image").src;
      const title = card.querySelector(".card-title").textContent;
      const description = card.getAttribute("data-description");

      // Populate popup content
      popupImage.src = image.replace("150", "300"); // Bigger image size
      popupTitle.textContent = title;
      popupDescription.textContent = description;

      // Show popup
      popup.style.display = "flex";
    });
  });

  // Close popup
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close popup when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
