const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const body = document.body;

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    body.classList.toggle('nav-open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        body.classList.remove('nav-open');
    });
});

// Add background to header on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



// template section(slider)
const slider = document.querySelector('.slider');
const templates = [
    { image: 'resume-template542.jpg', title: 'Professional', desc: 'Modern Corporate Design', link: '/templates/professional' },
    { image: 'resume-template542.jpg', title: 'Creative', desc: 'Innovative Layout', link: '/templates/creative' },
    { image: 'resume-template542.jpg', title: 'Modern', desc: 'Clean Minimalist Style', link: '/templates/modern' },
    { image: 'resume-template542.jpg', title: 'Elegant', desc: 'Sophisticated Design', link: '/templates/elegant' },
    { image: 'resume-template542.jpg', title: 'Minimal', desc: 'Simple and Clean', link: '/templates/minimal' }
];

// Generate Slides
function createSlides() {
    templates.forEach(template => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `
                <div class="template-card">
                    <img src="${template.image}" class="template-image" alt="${template.title}">
                    <div class="template-info">
                        <h3>${template.title}</h3>
                        <p>${template.desc}</p>
                        <a href="${template.link}" class="use-template">Use Template</a>
                    </div>
                </div>
            `;
        slider.appendChild(slide);
    });

    // Clone first and last slides for infinite effect
    const firstSlide = slider.firstElementChild.cloneNode(true);
    const lastSlide = slider.lastElementChild.cloneNode(true);
    slider.prepend(lastSlide);
    slider.appendChild(firstSlide);
}

createSlides();
const slides = document.querySelectorAll('.slide');
let currentIndex = 1;

// Update Slider Position
function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });
}

// Next Slide
function nextSlide() {
    currentIndex++;
    slider.style.transition = 'transform 0.6s ease';
    updateSlider();
}

// Previous Slide
function prevSlide() {
    currentIndex--;
    slider.style.transition = 'transform 0.6s ease';
    updateSlider();
}

// Infinite Loop Handling
slider.addEventListener('transitionend', () => {
    if (currentIndex >= slides.length - 1) {
        currentIndex = 1;
        slider.style.transition = 'none';
        updateSlider();
    }
    if (currentIndex <= 0) {
        currentIndex = slides.length - 2;
        slider.style.transition = 'none';
        updateSlider();
    }
});

// Event Listeners for Navigation
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Auto Slide Every 5 Seconds
let autoSlideInterval = setInterval(nextSlide, 5000);

// Pause Auto Slide on Hover
slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
slider.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
});

// Preview Functionality
document.querySelectorAll('.template-image').forEach(image => {
    image.addEventListener('click', function () {
        const imgSrc = this.src;
        document.querySelector('.modal-image').src = imgSrc;
        document.querySelector('.preview-modal').style.display = 'flex';
    });
});

// Close Modal
document.querySelector('.close-modal').addEventListener('click', () => {
    document.querySelector('.preview-modal').style.display = 'none';
});

// Close Modal on Outside Click
document.querySelector('.preview-modal').addEventListener('click', (e) => {
    if (e.target === document.querySelector('.preview-modal')) {
        document.querySelector('.preview-modal').style.display = 'none';
    }
});

// Initialize Slider
updateSlider();


// Add this to your existing script.js

// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px"
  });
  
  // Observe all elements with data-scroll attribute
  document.querySelectorAll('[data-scroll]').forEach((element) => {
    observer.observe(element);
  });
  
  // Parallax Effect
  // window.addEventListener('scroll', () => {
  //   const scrolled = window.pageYOffset;
  //   const parallaxElements = document.querySelectorAll('[data-parallax]');
    
  //   parallaxElements.forEach(element => {
  //     const speed = parseFloat(element.dataset.parallax);
  //     element.style.transform = `translateY(${scrolled * speed}px)`;
  //   });
  // });
  
  // Dynamic Gradient Rotation
//   let currentRotation = 0;
//   document.addEventListener('mousemove', (e) => {
//     const hero = document.querySelector('.hero');
//     const x = e.clientX / window.innerWidth - 0.5;
//     const y = e.clientY / window.innerHeight - 0.5;
    
//     currentRotation = currentRotation * 0.9 + (x * 15) * 0.1;
//     hero.style.transform = `perspective(1000px) rotateY(${currentRotation}deg)`;
//   });
  
//   // Scroll Progress Indicator
//   const progressBar = document.createElement('div');
//   progressBar.style.cssText = `
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: 3px;
//     background: #4a90e2;
//     z-index: 9999;
//     transition: width 0.2s ease;
//   `;
//   document.body.appendChild(progressBar);
  
//   window.addEventListener('scroll', () => {
//     const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     const scrolled = (winScroll / height) * 100;
//     progressBar.style.width = scrolled + '%';
//   });

//   // Add hover effect for 3D rotation
// // document.querySelectorAll('.template-card').forEach(card => {
// //     card.addEventListener('mousemove', (e) => {
// //       const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
// //       const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
// //       card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// //     });
  
// //     card.addEventListener('mouseleave', () => {
// //       card.style.transform = 'rotateY(0) rotateX(0)';
// //     });
// //   });


//   // Lazy load images
// const lazyLoader = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const img = entry.target;
//         img.src = img.dataset.src;
//         img.classList.add('loaded');
//         observer.unobserve(img);
//       }
//     });
//   });
  
//   document.querySelectorAll('img[data-src]').forEach(img => {
//     lazyLoader.observe(img);
//   });

//   // Custom Cursor
// const cursor = document.createElement('div');
// cursor.className = 'custom-cursor';
// document.body.appendChild(cursor);

// const follower = document.createElement('div');
// follower.className = 'cursor-follower';
// document.body.appendChild(follower);

// document.addEventListener('mousemove', (e) => {
//   cursor.style.left = `${e.clientX - 15}px`;
//   cursor.style.top = `${e.clientY - 15}px`;
//   follower.style.left = `${e.clientX - 5}px`;
//   follower.style.top = `${e.clientY - 5}px`;
// });

// document.querySelectorAll('a, button').forEach(element => {
//   element.addEventListener('mouseenter', () => {
//     cursor.style.transform = 'scale(1.5)';
//     follower.style.transform = 'scale(2)';
//   });
//   element.addEventListener('mouseleave', () => {
//     cursor.style.transform = 'scale(1)';
//     follower.style.transform = 'scale(1)';
//   });
// });