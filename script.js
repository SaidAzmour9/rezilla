let mobileBtn = document.querySelector("#burger-icon");
let mobileMenu = document.querySelector("#mobile-menu");
let menuAs = document.querySelectorAll("#mobile-menu ul li a");

let saleBtn = document.querySelector("#salebtn");
let rentBtn = document.querySelector("#rentbtn");
let saleForm = document.querySelector("#saleForm");
let rentForm = document.querySelector("#rentForm");

let saleMBtn = document.querySelector("#saleMbtn");
let rentMBtn = document.querySelector("#rentMbtn");
let saleMForm = document.querySelector("#saleMForm");
let rentMForm = document.querySelector("#rentMForm");


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
    menuAs.forEach(a => {
        a.addEventListener('focus', () => {
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

rentMBtn.addEventListener('click', ()=> {
    saleMForm.classList.add('hidden');
    rentMForm.classList.remove('hidden');
    saleMBtn.classList.remove('hover:underline-offset-8');
    saleMBtn.classList.remove('underline');
    saleMBtn.classList.remove('text-move');
    rentMBtn.classList.add('text-move');
    rentMBtn.classList.add('hover:underline-offset-8');
    rentMBtn.classList.add('underline');
})
saleMBtn.addEventListener('click', ()=> {
    saleMBtn.classList.add('hover:underline-offset-8');
    saleMBtn.classList.add('underline');
    rentMBtn.classList.remove('hover:underline-offset-8');
    saleMBtn.classList.add('text-move');
    rentMBtn.classList.remove('text-move');
    rentMBtn.classList.remove('underline');
    rentMForm.classList.add('hidden');
    saleMForm.classList.remove('hidden');
})