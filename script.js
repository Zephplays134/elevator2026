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
        <div class="card reveal">
          <div class="card-img" style="background-image: url('${item.img}')"></div>
          <div class="card-body">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            ${isDeal
                    ? `<div class="card-price">${item.price}<s>${item.original}</s></div>`
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
const heroDots = document.getElementById('hero-dots');
let currentSlide = 0;
let slideInterval;

slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', () => {
        showSlide(i);
        resetInterval();
    });
    heroDots.appendChild(dot);
});

const heroDotsList = heroDots.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    heroDotsList.forEach((d, i) => d.classList.toggle('active', i === index));
    currentSlide = index;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 6000);
}

slideInterval = setInterval(nextSlide, 6000);

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

const dots = dotsContainer.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonials.forEach((t, i) => t.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentTestimonial = index;
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => {
        showTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 5000);
}

testimonialInterval = setInterval(() => {
    showTestimonial((currentTestimonial + 1) % testimonials.length);
}, 5000);

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

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
});

// ==================== REVEAL ON SCROLL ====================

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ==================== AUTO-UPDATE MONITOR ====================

const TARGET_URL = 'https://zephplays134.github.io/elevator2026/';
const STORAGE_KEY = 'elevator2026_hash';
const POLL_INTERVAL = 60000;

const banner = document.getElementById('update-banner');
const refreshBtn = document.getElementById('update-refresh');
const closeBtn = document.getElementById('update-close');

async function fetchAndHash() {
    try {
        const res = await fetch(TARGET_URL, { cache: 'no-cache' });
        const text = await res.text();
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            const chr = text.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        return hash.toString();
    } catch {
        return null;
    }
}

async function checkForUpdate() {
    const newHash = await fetchAndHash();
    if (!newHash) return;
    const oldHash = localStorage.getItem(STORAGE_KEY);
    if (oldHash && oldHash !== newHash) {
        banner.classList.add('show');
    }
    localStorage.setItem(STORAGE_KEY, newHash);
}

refreshBtn.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
});

closeBtn.addEventListener('click', () => {
    banner.classList.remove('show');
});

setInterval(checkForUpdate, POLL_INTERVAL);

checkForUpdate();

// ==================== ELEVATOR AI CHATBOT ====================

const ELEVATOR_AI = {
    ships: [
        { name: 'Carnival Mardi Gras', capacity: 5282, year: 2021 },
        { name: 'Carnival Celebration', capacity: 5282, year: 2022 },
        { name: 'Carnival Horizon', capacity: 3960, year: 2018 },
        { name: 'Carnival Panorama', capacity: 3960, year: 2019 },
        { name: 'Carnival Breeze', capacity: 3690, year: 2012 },
    ],
    destinations,
    deals,
};

// Real-time, keyless, fully free, unlimited, and reliable: Elevator answers
// instantly from the site's own data, with no API key and no usage limits.
function callElevatorAI(intent) {
    return new Promise((resolve) => {
        const lower = intent.toLowerCase();
        if (lower.includes('ship') || lower.includes('vessel')) {
            const results = ELEVATOR_AI.ships.map(s => `<div class="card-ref"><strong>${s.name}</strong> (${s.year}) &bull; Capacity: ${s.capacity}</div>`).join('');
            resolve({ text: `We have ${ELEVATOR_AI.ships.length} incredible ships in our fleet:`, html: results });
        } else if (lower.includes('destin') || lower.includes('where') || lower.includes('go')) {
            const results = ELEVATOR_AI.destinations.map(d => `<div class="card-ref"><strong>${d.name}</strong> &bull; ${d.price}</div>`).join('');
            resolve({ text: `We sail to these amazing destinations:`, html: results });
        } else if (lower.includes('deal') || lower.includes('offer') || lower.includes('sale') || lower.includes('discount')) {
            const results = ELEVATOR_AI.deals.map(d => `<div class="card-ref"><strong>${d.name}</strong> &bull; ${d.price} <s>${d.original}</s></div>`).join('');
            resolve({ text: `Here are our current hot deals:`, html: results });
        } else if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) {
            const results = ELEVATOR_AI.destinations.map(d => `<div class="card-ref"><strong>${d.name}</strong> &bull; Starting at ${d.price}</div>`).join('');
            resolve({ text: `Prices vary by destination and season. Here are starting prices:`, html: results + `<br><em>Call 1-800-CARNIVAL for personalized quotes!</em>` });
        } else if (lower.includes('book') || lower.includes('reserve') || lower.includes('reservation')) {
            resolve({ text: `To book a cruise, call 1-800-CARNIVAL or visit our website. Want me to check availability for a specific destination and date?` });
        } else if (lower.includes('hello') || lower.includes('hi ') || lower === 'hi' || lower.includes('hey')) {
            resolve({ text: `Ahoy! Welcome aboard! I can help you find cruises, check prices, explore ships, or answer any questions. What would you like to know?` });
        } else if (lower.includes('food') || lower.includes('dining') || lower.includes('restaurant') || lower.includes('eat')) {
            resolve({ text: `Carnival offers over 20 dining options! From Guy Fieri's Burger Joint to Bonsai Sushi, the Chef's Table, and 24/7 room service. Buffets, steakhouses, and casual spots too.` });
        } else if (lower.includes('entertain') || lower.includes('show') || lower.includes('fun')) {
            resolve({ text: `Get ready for Broadway-caliber shows, comedy clubs, live music, trivia, casinos, and the famous Carnival WaterWorks! There's non-stop fun for all ages.` });
        } else if (lower.includes('kid') || lower.includes('family') || lower.includes('child') || lower.includes('camp')) {
            resolve({ text: `Camp Ocean (2-11), Circle "C" (12-14), and Club O2 (15-17) keep kids entertained with supervised activities. Family-friendly shows, pools, and water parks too!` });
        } else if (lower.includes('alaska') || lower.includes('glacier')) {
            resolve({ text: `Alaska cruises start at $549. You'll see towering glaciers, whales, bald eagles, and visit ports like Juneau, Skagway, and Ketchikan. Best time: May-September.` });
        } else if (lower.includes('caribbean') || lower.includes('bahamas')) {
            resolve({ text: `Caribbean & Bahamas cruises start at $299. White sand beaches, crystal waters, private islands, and vibrant culture. 3-7 day itineraries available year-round!` });
        } else if (lower.includes('europe') || lower.includes('mediterranean')) {
            resolve({ text: `European cruises start at $799. Explore historic ports in Italy, Greece, Spain, and France. Rich culture, amazing food, and ancient landmarks await!` });
        } else if (lower.includes('mexico') || lower.includes('riviera')) {
            resolve({ text: `Mexican Riviera cruises start at $279. Visit Cozumel, Costa Maya, and Cabo. Snorkeling, ancient ruins, and vibrant culture.` });
        } else if (lower.includes('thank')) {
            resolve({ text: `You're welcome! Have a fantastic day, and we hope to see you onboard soon! ⚓` });
        } else if (lower.includes('help') || lower.includes('what can you')) {
            resolve({ text: `I can help with:<br>&bull; 📌 Destination info & pricing<br>&bull; 🚢 Ship details & features<br>&bull; 🎉 Current deals & offers<br>&bull; 🍽️ Onboard dining & entertainment<br>&bull; 📞 Booking assistance<br><br>Just ask me anything!` });
        } else {
            resolve({ text: `I'm not sure about that. Try asking about destinations, ships, pricing, deals, or onboard activities! Or call 1-800-CARNIVAL for more help.` });
        }
    });
}

const chatBtn = document.getElementById('chat-btn');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

function openChat() {
    chatWindow.classList.add('open');
    chatBtn.classList.add('hidden');
    chatInput.focus();
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatBtn.addEventListener('click', openChat);
document.getElementById('hero-chat').addEventListener('click', openChat);

chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('open');
    chatBtn.classList.remove('hidden');
});

function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `msg ${sender}`;
    div.innerHTML = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
}

function showTyping() {
    const div = document.createElement('div');
    div.className = 'msg bot';
    div.textContent = 'Elevator AI is typing...';
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
}

async function handleUserMessage(message) {
    addMessage(message, 'user');
    chatInput.value = '';
    const typing = showTyping();
    const response = await callElevatorAI(message);
    typing.remove();
    if (response.html) {
        addMessage(response.text + response.html, 'bot');
    } else {
        addMessage(response.text, 'bot');
    }
}

chatSend.addEventListener('click', () => {
    const msg = chatInput.value.trim();
    if (msg) handleUserMessage(msg);
});

chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const msg = chatInput.value.trim();
        if (msg) handleUserMessage(msg);
    }
});

chatMessages.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-reply')) {
        handleUserMessage(e.target.textContent);
    }
});
