/* ================================
   SKILL BAR ANIMATION
================================ */
const skillLevels = document.querySelectorAll('.skill-level');

function animateSkills() {
    skillLevels.forEach(level => {
        level.style.width = level.getAttribute("data-level");
    });
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
        }
    });
}, { threshold: 0.3 });

observer.observe(document.querySelector('.skills-section'));

/* =====================================
   CONTACT FORM VALIDATION + LOCALSTORAGE
===================================== */
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msgBox = document.getElementById("formMessage");

    // Validation
    if (name === "") {
        msgBox.textContent = "Error: Name is required.";
        msgBox.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        msgBox.textContent = "Error: Enter a valid email.";
        msgBox.style.color = "red";
        return;
    }

    if (message === "") {
        msgBox.textContent = "Error: Message cannot be empty.";
        msgBox.style.color = "red";
        return;
    }

    // Store in localStorage
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactMessage", message);

    // Success
    msgBox.textContent = "Form submitted successfully! Redirecting...";
    msgBox.style.color = "green";

    setTimeout(() => {
        window.location.href = "form-details.html";
    }, 1200);
});
