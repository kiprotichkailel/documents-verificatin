// JavaScript for smooth scrolling between sections
document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor links that refer to sections within the page
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Get the target section ID from the href attribute
            const sectionId = link.getAttribute('href').substring(1);

            // Scroll to the corresponding section
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
