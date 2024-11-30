// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form Validation
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields before submitting the form.");
      e.preventDefault(); // Prevent form submission
    } else {
      alert("Thank you for reaching out! We will get back to you shortly.");
    }
  });
  
