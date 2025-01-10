// Handle onfocus
function handleFocus(element) {
    element.style.backgroundColor = "lightyellow";
  }

  // Handle onblur
  function handleBlur(element) {
    element.style.backgroundColor = "";
  }

  // Handle onchange
  function handleChange(element) {
    if (element.id === "email") {
      const message = document.getElementById("message");
      if (element.validity.valid) {
        message.textContent = "Email format looks good!";
        message.style.color = "green";
      } else {
        message.textContent = "Invalid email format.";
        message.style.color = "red";
      }
    }
  }

  // Handle oninvalid
  function handleInvalid(element) {
    element.style.border = "2px solid red"; // Highlight the input with a red border
    const message = document.getElementById("message");
    message.textContent = element.placeholder + " is required."; // Display the error message
  }

  // Handle form submission
  document
    .getElementById("feedbackForm")
    .addEventListener("submit", function (event) {
      //event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const feedback = document.getElementById("feedback").value.trim();
      const message = document.getElementById("message");

      if (name === "" || email === "" || feedback === "") {
        message.textContent = "Please fill out all fields.";
        message.style.color = "red";
      } else {
        message.textContent = `Thank you for your feedback, ${name}!`;
        message.style.color = "green";
        document.getElementById("feedbackForm").reset();
      }
    });