let mobileBtn = document.querySelector("#burger-icon");
let mobileMenu = document.querySelector("#mobile-menu");
let menuAs = document.querySelectorAll("#mobile-menu ul li a");
let saleBtn = document.querySelector("#salebtn");
let rentBtn = document.querySelector("#rentbtn");
let saleForm = document.querySelector("#saleForm");
let rentForm = document.querySelector("#rentForm");
let saleSearch = document.querySelector('#salesearch');
let rentSearch = document.querySelector('#rentsearch');


document.getElementById("propertyForm").addEventListener("submit", function(event) {
    var propertyType = document.getElementById("propertyType").value;
    var roomType = document.getElementById("roomType").value;
    var isValid = true;

    if (roomType === "Select rooms") {
        document.getElementById("roomsTypeError").innerText = "Property Type is required";
        isValid = false;
    } else {
        document.getElementById("roomsTypeError").innerText = "";
    }

    if (propertyType === "Select Property Type") {
        document.getElementById("propertyTypeError").innerText = "Property Type is required";
        isValid = false;
    } else {
        document.getElementById("propertyTypeError").innerText = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const observerOptions = {
        root: null,
        threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated", "animate__fadeInUp");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});


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

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuAs.forEach(li => {
        li.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
        })
    });
})


rentBtn.addEventListener('click', ()=> {
    saleForm.classList.add('hidden');
    saleBtn.classList.remove('hover:underline-offset-8');
    saleBtn.classList.remove('underline');
    saleBtn.classList.remove('text-move');
    rentBtn.classList.add('text-move');
    saleSearch.classList.add('hidden');
    rentSearch.classList.remove('hidden');
    rentBtn.classList.add('hover:underline-offset-8');
    rentBtn.classList.add('underline');
    rentForm.classList.remove('hidden');
})
saleBtn.addEventListener('click', ()=> {
    saleBtn.classList.add('hover:underline-offset-8');
    saleBtn.classList.add('underline');
    rentBtn.classList.remove('hover:underline-offset-8');
    saleBtn.classList.add('text-move');
    rentBtn.classList.remove('text-move');
    rentBtn.classList.remove('underline');
    rentForm.classList.add('hidden');
    saleForm.classList.remove('hidden');
})





