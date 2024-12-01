// Smooth scrolling function for navigation links
function scrollToSection(sectionId) {
    // Find the section by its ID and scroll to it smoothly
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add active class to the current navigation link
function setActiveLink(targetId) {
    const navLinks = document.querySelectorAll('.navbar nav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
    });
    const activeLink = document.querySelector(`.navbar nav ul li a[href="#${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active'); // Add active class to the clicked link
    }
}

// Scroll to top button functionality
function toggleScrollTopButton() {
    const scrollTopButton = document.getElementById('scrollTopButton');
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
}

// Event listener for scroll to top button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listener for each navigation link to trigger smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.navbar nav ul li a');
    
    // Add event listeners for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Get the target section ID from the link's href
            const targetSection = link.getAttribute('href').substring(1); // Remove the '#' symbol

            // Call the scrollToSection function to scroll to the target section
            scrollToSection(targetSection);

            // Set the clicked link as the active link
            setActiveLink(targetSection);
        });
    });

    // Set up scroll event to show/hide scroll to top button
    window.addEventListener('scroll', toggleScrollTopButton);

    // Set initial active link based on the section the user is currently viewing
    const currentSection = window.location.hash ? window.location.hash.substring(1) : 'home';
    setActiveLink(currentSection);
    
    // Event listener for scroll to top button
    const scrollTopButton = document.getElementById('scrollTopButton');
    if (scrollTopButton) {
        scrollTopButton.addEventListener('click', scrollToTop);
    }
});
