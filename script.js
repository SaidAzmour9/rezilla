let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const pagination = document.querySelector('.pagination');

function showSlides() {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    updatePagination();
    
}

function nextSlide() {
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    showSlides();
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    showSlides();
}

function updatePagination() {
    pagination.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === slideIndex - 1) {
            dot.classList.add('active');
        }
        dot.setAttribute('onclick', `goToSlide(${i + 1})`);
        pagination.appendChild(dot);
    }
}

function goToSlide(index) {
    slideIndex = index;
    showSlides();
}

