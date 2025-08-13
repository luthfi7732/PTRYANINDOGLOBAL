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

// Dynamic Content Loading from Netlify CMS
async function loadJobs() {
    try {
        const jobsContainer = document.getElementById('jobs-container');
        if (!jobsContainer) return;

        // Load jobs from Netlify CMS
        const response = await fetch('/content/jobs.json');
        let jobs = [];
        
        if (response.ok) {
            jobs = await response.json();
        } else {
            // Fallback to sample data if no CMS data
            jobs = [
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
        }

        if (jobs.length === 0) {
            jobsContainer.innerHTML = '<p class="no-data">Belum ada lowongan kerja yang tersedia.</p>';
            return;
        }

        jobsContainer.innerHTML = jobs.map(job => `
            <div class="job-card">
                <h3 class="job-title">${job.title || 'Posisi Kosong'}</h3>
                <p class="job-company">${job.company || 'Perusahaan Tidak Diketahui'}</p>
                <div class="job-details">
                    <p><i class="fas fa-map-marker-alt"></i> ${job.location || 'Lokasi Tidak Diketahui'}</p>
                    <p><i class="fas fa-briefcase"></i> ${job.type || 'Full Time'}</p>
                </div>
                <p class="job-description">${job.description || 'Deskripsi pekerjaan tidak tersedia.'}</p>
                <p class="job-salary"><i class="fas fa-dollar-sign"></i> ${job.salary || 'Gaji Kompetitif'}</p>
                <button class="apply-btn" onclick="applyJob('${job.title}')">Lamar Sekarang</button>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading jobs:', error);
        const jobsContainer = document.getElementById('jobs-container');
        if (jobsContainer) {
            jobsContainer.innerHTML = '<p class="error">Gagal memuat lowongan kerja. Silakan coba lagi nanti.</p>';
        }
    }
}

async function loadTestimonials() {
    try {
        const testimonialsContainer = document.getElementById('testimonials-container');
        if (!testimonialsContainer) return;

        // Load testimonials from Netlify CMS
        const response = await fetch('/content/testimonials.json');
        let testimonials = [];
        
        if (response.ok) {
            testimonials = await response.json();
        } else {
            // Fallback to sample data if no CMS data
            testimonials = [
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
        }

        if (testimonials.length === 0) {
            testimonialsContainer.innerHTML = '<p class="no-data">Belum ada testimoni yang tersedia.</p>';
            return;
        }

        testimonialsContainer.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-avatar">${testimonial.avatar || testimonial.name.charAt(0)}</div>
                <p class="testimonial-text">"${testimonial.text || 'Testimoni tidak tersedia.'}"</p>
                <h4 class="testimonial-author">${testimonial.name || 'Anonim'}</h4>
                <p class="testimonial-position">${testimonial.position || 'Posisi Tidak Diketahui'}</p>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading testimonials:', error);
        const testimonialsContainer = document.getElementById('testimonials-container');
        if (testimonialsContainer) {
            testimonialsContainer.innerHTML = '<p class="error">Gagal memuat testimoni. Silakan coba lagi nanti.</p>';
        }
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
