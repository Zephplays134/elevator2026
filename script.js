// ==================== DATA ====================

const destinations = [
    {
        img: 'https://images.unsplash.com/photo-1540206395-68808572332f?w=600',
        name: 'Bahamas',
        desc: 'Crystal-clear waters, private islands, and endless sunshine.',
        price: 'From $299',
    },
    {
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
        name: 'Caribbean',
        desc: 'Explore tropical paradise with white sand beaches.',
        price: 'From $349',
    },
    {
        img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600',
        name: 'Mexican Riviera',
        desc: 'Vibrant culture, ancient ruins, and stunning coastlines.',
        price: 'From $279',
    },
    {
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
        name: 'Alaska',
        desc: 'Majestic glaciers, wildlife, and rugged wilderness.',
        price: 'From $549',
    },
    {
        img: 'https://images.unsplash.com/photo-1499678329028-101d1c0a1352?w=600',
        name: 'Europe',
        desc: 'Historic ports, Mediterranean charm, and world-class culture.',
        price: 'From $799',
    },
    {
        img: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600',
        name: 'Hawaii',
        desc: 'Volcanic landscapes, lush valleys, and golden beaches.',
        price: 'From $449',
    },
];

const deals = [
    {
        img: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600',
        name: 'Bahamian Escape',
        desc: '3-day cruise to Nassau & Princess Cays.',
        price: '$199',
        original: '$499',
    },
    {
        img: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600',
        name: 'Western Caribbean',
        desc: '5-day cruise to Cozumel & Costa Maya.',
        price: '$329',
        original: '$649',
    },
    {
        img: 'https://images.unsplash.com/photo-1537956965359-7573183d1afe?w=600',
        name: 'Alaskan Adventure',
        desc: '7-day cruise through the Inside Passage.',
        price: '$499',
        original: '$899',
    },
];

// ==================== RENDER CARDS ====================

function renderCards(containerId, items, isDeal) {
    const container = document.getElementById(containerId);
    container.innerHTML = items
        .map(
            (item) => `
        <div class="card">
          <div class="card-img" style="background-image: url('${item.img}')"></div>
          <div class="card-body">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            ${isDeal
                    ? `<div class="card-price">${item.price} <span><s>${item.original}</s></span></div>`
                    : `<div class="card-price">${item.price}</div>`
                }
          </div>
        </div>
      `
        )
        .join('');
}

renderCards('dest-cards', destinations);
renderCards('deals-cards', deals, true);

// ==================== HERO SLIDER ====================

const slides = document.querySelectorAll('.hero-slide');
const prevBtn = document.getElementById('hero-prev');
const nextBtn = document.getElementById('hero-next');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

nextBtn.addEventListener('click', () => { nextSlide();
    resetInterval(); });
prevBtn.addEventListener('click', () => { prevSlide();
    resetInterval(); });

slideInterval = setInterval(nextSlide, 5000);

// ==================== TESTIMONIAL SLIDER ====================

const testimonials = document.querySelectorAll('.testimonial');
const dotsContainer = document.getElementById('testimonial-dots');
let currentTestimonial = 0;
let testimonialInterval;

testimonials.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        showTestimonial(i);
        resetTestimonialInterval();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonials.forEach((t, i) => t.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentTestimonial = index;
}

function nextTestimonial() {
    const next = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(next);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(nextTestimonial, 4000);
}

testimonialInterval = setInterval(nextTestimonial, 4000);

// ==================== HAMBURGER MENU ====================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});

// ==================== SEARCH ====================

document.getElementById('search-btn').addEventListener('click', () => {
    const dest = document.getElementById('destination').value;
    const date = document.getElementById('departure').value;
    const dur = document.getElementById('duration').value;
    const msg = date
        ? `Searching ${dest} cruises for ${dur} departing ${date}...`
        : `Searching ${dest} cruises for ${dur}...`;
    alert(msg);
});

// ==================== SCROLL HEADER ====================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 48, 135, 1)';
    } else {
        header.style.background = 'rgba(0, 48, 135, 0.95)';
    }
});
