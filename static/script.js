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
function ScrollToFirstPart(event) {
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

document.addEventListener("DOMContentLoaded", function() {
    const list = document.querySelector('.services-list');
    const items = document.querySelectorAll('.services-list li');
    const rightBtn = document.querySelector('.rightbutton');
    const leftBtn = document.querySelector('.leftbutton');

    let currentIndex = 0;
    const itemsPerView = 4;
    const totalItems = items.length;

    function updateScroll() {
        const itemWidth = items[0].getBoundingClientRect().width;
        const scrollAmount = itemWidth * currentIndex;
        list.style.transform = `translateX(-${scrollAmount+itemWidth/3}px)`;
    }

    rightBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - itemsPerView) {
            currentIndex++;
            updateScroll();
        }
    });

    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateScroll();
        } else {
            list.style.transform = 'translateX(0px)'; // Reset to the start
        }
    });

    // Add mouse wheel scrolling
    list.addEventListener('wheel', (event) => {
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) { // Horizontal scrolling
            event.preventDefault(); // Prevent default only for horizontal scrolling
            if (event.deltaX > 0) { // Scroll right
                if (currentIndex < totalItems - itemsPerView) {
                    currentIndex++;
                    updateScroll();
                }
            } else { // Scroll left
                if (currentIndex > 0) {
                    currentIndex--;
                    updateScroll();
                } else {
                    list.style.transform = 'translateX(0px)'; // Reset to the start
                }
            }
        }
        // Allow vertical scrolling (deltaY) to function normally
    });
    
});
