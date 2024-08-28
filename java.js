// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menú');
    const headerCaja = document.querySelector('.header-caja');
    const nav = document.querySelector('.nav');
    const links = document.querySelectorAll('.nav .li a'); // Selecciona todos los enlaces dentro de los elementos de lista

    const headerHeight = headerCaja.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= headerHeight) {
            menu.classList.add('fixed');
        } else {
            menu.classList.remove('fixed');
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active'); // Cierra el menú al hacer clic en un enlace
        });
    });
});

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}








document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const totalImages = images.length;
    let index = 0;

    function updateSlide() {
        slides.style.transform = `translateX(-${index * 100}vw)`;
    }

    document.getElementById('next').addEventListener('click', () => {
        index = (index + 1) % totalImages;
        updateSlide();
    });

    document.getElementById('prev').addEventListener('click', () => {
        index = (index - 1 + totalImages) % totalImages;
        updateSlide();
    });
});
















const url = 'path/to/your/pdf.pdf'; // URL del PDF

let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
const scale = 1.5;
const canvas = document.getElementById('pdf-canvas');
const ctx = canvas.getContext('2d');

// Cargar el PDF
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    document.getElementById('page-slider').max = pdfDoc.numPages;
    renderPage(pageNum);
});

// Renderizar una página del PDF
function renderPage(num) {
    pageRendering = true;
    pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        const renderTask = page.render(renderContext);
        renderTask.promise.then(() => {
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });

    // Actualizar el slider
    document.getElementById('page-slider').value = num;
}

// Manejar el cambio en el slider
document.getElementById('page-slider').addEventListener('input', (e) => {
    const num = parseInt(e.target.value);
    if (pageRendering) {
        pageNumPending = num;
    } else {
        pageNum = num;
        renderPage(num);
    }
});






