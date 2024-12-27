document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const feedback = document.getElementById("feedback").value.trim();
    const message = document.getElementById("message");

    if (name === "" || email === "" || feedback === "") {
      message.textContent = "All fields are required.";
      message.style.color = "red";
    } else {
      message.textContent = `Thank you for your feedback, ${name}!`;
      message.style.color = "green";
      document.getElementById("feedbackForm").reset();
    }
  });
