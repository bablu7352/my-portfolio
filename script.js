
/* =====================================
   BABLU KUMAR PORTFOLIO
   JAVASCRIPT PART 1
===================================== */


/* 1. TYPING ANIMATION */

const typingText = document.getElementById("typing-text");

const words = [
    "Web Developer",
    "Creative Designer",
    "Frontend Developer",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let speed = isDeleting ? 60 : 110;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500;
        isDeleting = true;
    }

    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/* 2. MOBILE NAVIGATION MENU */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }

    });

    // Close menu after clicking a link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });

}

/* =====================================
   JAVASCRIPT PART 2
===================================== */


/* 3. BACK TO TOP BUTTON */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* 4. AUTOMATIC CURRENT YEAR */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* 5. ACTIVE NAVIGATION LINK */

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});

/* =====================================
   JAVASCRIPT PART 3
   CONTACT FORM VALIDATION
===================================== */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const subject = document.getElementById("subject").value.trim();

        const message = document.getElementById("message").value.trim();


        // Empty field validation

        if (!name || !email || !subject || !message) {

            showMessage("❌ Please fill all fields.", "red");

            return;
        }


        // Email validation

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showMessage("❌ Please enter a valid email address.", "red");

            return;
        }


        // Name validation

        if (name.length < 2) {

            showMessage("❌ Name must contain at least 2 characters.", "red");

            return;
        }


        // Success message

        showMessage(
            "✔ Form validated successfully! Thank you, " + name + ".",
            "#00ff9d"
        );

        contactForm.reset();

    });

}


/* MESSAGE DISPLAY FUNCTION */

function showMessage(message, color) {

    formMessage.textContent = message;

    formMessage.style.color = color;

}
