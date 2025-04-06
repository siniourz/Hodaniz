document.addEventListener("DOMContentLoaded", function() {
    function isElementInView(el) {
        var rect = el.getBoundingClientRect();
        return (rect.top <= window.innerHeight && rect.bottom >= 0);
    }
    
    // Handle scroll event
    window.addEventListener('scroll', function() {
        var secondpart = document.querySelector('.second-part');
        var images = document.querySelectorAll('.second-part-img');
    
        // If the fourth part is in the viewport, show images
        if (isElementInView(secondpart)) {
            secondpart.classList.add('show-img2');
        }
    });
    
});
function scrollToServices(event) {
    event.preventDefault(); // Prevents the default jump
    const section = document.getElementById('service');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
function scrollToProjects(event) {
    event.preventDefault(); // Prevents the default jump
    const section = document.getElementById('projects');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
function ScrollToContact(event) {
    event.preventDefault(); // Prevents the default jump
    const section = document.getElementById('contact');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
function scrollToTop(event) {
    event.preventDefault(); // Prevents the default jump
    const section = document.getElementById('top');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
window.addEventListener('scroll', function() {
    const target = document.getElementById('moveToTopButton');
    if (window.scrollY > 1400) { // change the number to your desired scroll amount
        target.classList.add('visible');

    } else {
        target.classList.remove('visible');
    }
});


