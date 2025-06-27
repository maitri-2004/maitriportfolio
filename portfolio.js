// AOS Initialization
AOS.init({ offset: 0 });

// Contact Form Submission Logic
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh

    const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = form.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = form.querySelector('textarea[placeholder="Your Message"]').value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    form.reset();
  });
});

// Mobile Navbar Toggle Functions
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}


document.addEventListener("DOMContentLoaded", function () {
  const roles = ["Frontend Developer", "ML Engineer"];
  const element = document.getElementById("typewriter-text");

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];
    const displayedText = currentRole.substring(0, charIndex);

    element.textContent = displayedText;

    if (!isDeleting && charIndex < currentRole.length) {
      charIndex++;
      setTimeout(type, 100); // typing speed
    } else if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, 2000); // pause before deleting
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50); // delete speed
    } else {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 500); // pause before next word
    }
  }

  type();
});

