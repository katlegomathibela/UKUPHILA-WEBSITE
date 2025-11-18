document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let message = document.getElementById("message").value.trim();

      if (name === "") {
        status.textContent = "Please enter your full name.";
        status.style.color = "red";
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        status.textContent = "Please enter a valid email address.";
        status.style.color = "red";
        return;
      }

      if (message.length < 10) {
        status.textContent = "Message must be at least 10 characters.";
        status.style.color = "red";
        return;
      }

      status.textContent = "Your message has been sent!";
      status.style.color = "green";

      form.reset();
    });
  }

  // Gallery image click interaction
  document.querySelectorAll(".gallery-container img").forEach(img => {
    img.addEventListener("click", () => {
      alert("You clicked on: " + img.alt);
    });
  });

  // Donation button interaction
  const donateBtn = document.getElementById("donateBtn");
  if (donateBtn) {
    donateBtn.addEventListener("click", () => {
      let confirmDonate = confirm("Would you like to proceed to the donation page?");
      if (confirmDonate) {
        window.location.href = "donate.html";
      }
    });
  }

});
