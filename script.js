document.addEventListener("DOMContentLoaded", () => {
    // 1. Swiper Coverflow Initialization
    var swiper = new Swiper('.swiper-container-looks', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 10,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // 2. Header Scroll Animation (Shrink header, hide links, glow name)
    const navbar = document.getElementById("navbar");
    const navLinks = document.getElementById("nav-links");
    const navName = document.getElementById("nav-name");
    const navSurname = document.getElementById("nav-surname");

    document.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            // Scrolled down
            navbar.classList.remove("py-4");
            navbar.classList.add("py-2", "bg-black/60", "backdrop-blur-xl");
            
            navLinks.style.opacity = "0";
            navLinks.style.transform = "translateY(-10px)";
            navLinks.style.pointerEvents = "none";
            
            navName.classList.add("scale-110");
            navName.style.textShadow = "0 0 15px rgba(10, 132, 255, 0.8)";
            navSurname.classList.remove("text-blue-400");
            navSurname.classList.add("text-white");
        } else {
            // Top of page
            navbar.classList.add("py-4");
            navbar.classList.remove("py-2", "bg-black/60", "backdrop-blur-xl");
            
            navLinks.style.opacity = "1";
            navLinks.style.transform = "translateY(0)";
            navLinks.style.pointerEvents = "auto";
            
            navName.classList.remove("scale-110");
            navName.style.textShadow = "none";
            navSurname.classList.add("text-blue-400");
            navSurname.classList.remove("text-white");
        }
    });
});