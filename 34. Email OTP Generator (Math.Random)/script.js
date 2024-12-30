const emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", function (e) {
  //e.preventDefault();
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  if (email && emailInput.checkValidity()) {
    const otp = Math.floor(100000 + Math.random() * 900000);
    alert(`Your OTP is ${otp}`);
  } else {
    alert(`Please enter a valid email address.`);
  }
});
