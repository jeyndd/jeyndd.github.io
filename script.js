document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    }

    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Добавляем анимацию для фотографий
    const photos = document.querySelectorAll('.about-photo, .product-photos img');
    photos.forEach((photo, index) => {
        photo.classList.add('fade-in');
        setTimeout(() => {
            photo.classList.add('visible');
        }, index * 300); // Задержка 300 мс между появлениями
    });
});
