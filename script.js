// 1. Generate the Starfield
document.addEventListener("DOMContentLoaded", () => {
    const starfield = document.getElementById('starfield');
    const starCount = 200; // Number of stars in the universe

    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        
        // Randomize size between 1px and 3px
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Randomize position across the entire scrollable height
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 300 + 'vh'; 
        
        // Randomize twinkle animation speed and delay
        star.style.animationDuration = (Math.random() * 3 + 1.5) + 's';
        star.style.animationDelay = (Math.random() * 3) + 's';
        
        // Occasionally make a star slightly purple or pink
        const colorChance = Math.random();
        if (colorChance > 0.9) {
            star.style.background = '#d8b4fe'; // Light purple
        } else if (colorChance > 0.8) {
            star.style.background = '#f9a8d4'; // Light pink
        }

        starfield.appendChild(star);
    }
});

// 2. Swiper Coverflow Initialization
var swiper = new Swiper('.swiper-container-looks', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});