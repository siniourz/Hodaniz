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

