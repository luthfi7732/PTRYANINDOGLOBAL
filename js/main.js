// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 35, 126, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(26, 35, 126, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Mengirim...';
        submitBtn.disabled = true;
        
        try {
            // Here you would normally send the form data to your backend
            // For now, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            alert('Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda.');
            contactForm.reset();
            
        } catch (error) {
            alert('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Dynamic Content Loading (for CMS integration)
async function loadJobs() {
    try {
        // This will be replaced with actual CMS data loading
        const jobsContainer = document.getElementById('jobs-container');
        if (!jobsContainer) return;
        
        // Sample job data - will be replaced with CMS data
        const jobs = [
            {
                title: "Chief Officer",
                company: "Royal Caribbean International",
                location: "International Waters",
                salary: "$4,500 - $6,000 USD",
                type: "Full Time",
                description: "Seeking experienced Chief Officer for luxury cruise operations."
            },
            {
                title: "2nd Engineer",
                company: "Maersk Line",
                location: "Global Routes",
                salary: "$5,000 - $7,000 USD",
                type: "Contract",
                description: "Marine engineer needed for container vessel operations."
            },
            {
                title: "Able Seaman",
                company: "MSC Cruises",
                location: "Mediterranean Sea",
                salary: "$2,500 - $3,500 USD",
                type: "Full Time",
                description: "Experienced AB for cruise ship deck department."
            }
        ];
        
        jobsContainer.innerHTML = jobs.map(job => `
            <div class="job-card">
                <h3 class="job-title">${job.title}</h3>
                <p class="job-company">${job.company}</p>
                <div class="job-details">
                    <p><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
                    <p><i class="fas fa-briefcase"></i> ${job.type}</p>
                </div>
                <p class="job-description">${job.description}</p>
                <p class="job-salary"><i class="fas fa-dollar-sign"></i> ${job.salary}</p>
                <button class="apply-btn" onclick="applyJob('${job.title}')">Lamar Sekarang</button>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading jobs:', error);
    }
}

async function loadTestimonials() {
    try {
        const testimonialsContainer = document.getElementById('testimonials-container');
        if (!testimonialsContainer) return;
        
        // Sample testimonials - will be replaced with CMS data
        const testimonials = [
            {
                name: "Capt. Budi Santoso",
                position: "Master Mariner",
                text: "Saya sangat berterima kasih kepada Ryanindo Global Samudera yang telah membantu saya mendapatkan posisi sebagai Master di kapal pesiar mewah. Prosesnya sangat profesional dan cepat.",
                avatar: "BS"
            },
            {
                name: "Sarah Wijaya",
                position: "Chief Engineer",
                text: "Pelayanan yang sangat memuaskan! Tim Ryanindo sangat membantu dalam proses dokumentasi dan interview. Sekarang saya bekerja di kapal kargo internasional dengan gaji yang kompetitif.",
                avatar: "SW"
            },
            {
                name: "Andi Prasetyo",
                position: "2nd Officer",
                text: "Rekomendasi terbaik untuk agency pelayaran! Mereka tidak hanya membantu mendapatkan pekerjaan, tapi juga memberikan training yang sangat berguna.",
                avatar: "AP"
            }
        ];
        
        testimonialsContainer.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-avatar">${testimonial.avatar}</div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <h4 class="testimonial-author">${testimonial.name}</h4>
                <p class="testimonial-position">${testimonial.position}</p>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

// Job Application Handler
function applyJob(jobTitle) {
    alert(`Terima kasih atas minat Anda untuk posisi ${jobTitle}. Silakan hubungi kami melalui form kontak atau datang langsung ke kantor kami.`);
}

// Initialize dynamic content
document.addEventListener('DOMContentLoaded', () => {
    loadJobs();
    loadTestimonials();
    
    // Add loading animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.job-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Netlify CMS Integration
if (window.location.pathname.includes('/admin')) {
    // Initialize Netlify CMS
    console.log('Netlify CMS loaded');
}
