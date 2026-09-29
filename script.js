// 1. Generate the Starfield
// 1. Generate the Starfield (Optimized for Mobile)
document.addEventListener("DOMContentLoaded", () => {
    const starfield = document.getElementById('starfield');
    
    // Check if device is mobile based on screen width
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 50 : 200; // 50 stars on phone, 200 on PC

    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        
        // Randomize size
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Randomize position
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 300 + 'vh'; 
        
        // Randomize animation speed
        star.style.animationDuration = (Math.random() * 3 + 1.5) + 's';
        star.style.animationDelay = (Math.random() * 3) + 's';
        
        // Color variation
        const colorChance = Math.random();
        if (colorChance > 0.9) {
            star.style.background = '#d8b4fe'; 
        } else if (colorChance > 0.8) {
            star.style.background = '#f9a8d4'; 
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