// Newsletter form submission handler
document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const emailInput = document.getElementById("email");
    const confirmationMessage = document.getElementById("confirmation-message");

    // Optionally send the email to your backend
    const email = emailInput.value;

    // Simulate a successful submission (you could replace this with an actual API call)
    console.log(`Email submitted: ${email}`); // For debugging

    // Display the confirmation message
    confirmationMessage.textContent =
      "Thank you for subscribing! Please check your email for further instructions.";
    confirmationMessage.classList.remove("hidden");

    // Clear the form
    emailInput.value = "";
  });

// Accordion functionality
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector(".accordion__icon i");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector(".accordion__icon i");

      if (i === index) {
        c.style.height = isOpen ? "0px" : `${c.scrollHeight}px`;
        ic.classList.toggle("ri-add-line", isOpen);
        ic.classList.toggle("ri-subtract-fill", !isOpen);
      } else {
        c.style.height = "0px";
        ic.classList.add("ri-add-line");
        ic.classList.remove("ri-subtract-fill");
      }
    });
  });
});

// Function to handle the active state of navbar items
function changeContent(page) {
  // Get all navigation links
  var links = document.querySelectorAll(".menu ul li a");

  // Remove the active class from all links
  links.forEach((link) => link.classList.remove("active"));

  // Add the active class to the clicked link
  document.getElementById(page + "-link").classList.add("active");
}

// Make "Home" the default active page on load
window.onload = function () {
  document.getElementById("home-link").classList.add("active");
};

// JS for dark mode functionality
// Get the dark mode button element
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  const darkModeBtn = document.getElementById('dark-mode-button');
  const icon = darkModeBtn.querySelector('i');

  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

document.getElementById('dark-mode-button').addEventListener('click', toggleDarkMode);

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

// Show the button when scrolled down 100px from the top
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll to top when the button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
