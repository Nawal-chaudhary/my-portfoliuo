document.addEventListener("DOMContentLoaded", () => {

    /* ================== SKILL BAR ANIMATION ================== */
    const levels = document.querySelectorAll(".skill-level");
    levels.forEach(l => {
        setTimeout(() => {
            l.style.width = l.dataset.level;
        }, 300);
    });

    /* ================== CANVAS ================== */
    let c = document.getElementById("portfolioCanvas");
    if (c) {
        let ctx = c.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(50, 40, 100, 50);

        const clearBtn = document.getElementById("clearCanvas");
        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                ctx.clearRect(0, 0, c.width, c.height);
            });
        }
    }

    /* ================== FORM SUBMISSION ================== */
    const form = document.getElementById("form");
    const msgBox = document.getElementById("msg");

    if (form && msgBox) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const n = document.getElementById("name").value.trim();
            const e2 = document.getElementById("email").value.trim();
            const m = document.getElementById("message").value.trim();

            if (!n || !e2 || !m) {
                msgBox.innerText = "All fields are required!";
                msgBox.style.color = "red";
                return;
            }

            localStorage.setItem("name", n);
            localStorage.setItem("email", e2);
            localStorage.setItem("message", m);

            msgBox.style.color = "green";
            msgBox.innerText = "Submitted Successfully!";

            setTimeout(() => {
                window.location.href = "form-details.html";
            }, 700);
        });
    }

    /* ================== IMAGE SLIDER ================== */
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const sliderImages = document.querySelectorAll(".slider-image");
    let currentIndex = 0;

    function updateSlider() {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    if (nextBtn && prevBtn && sliderWrapper) {
        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % sliderImages.length;
            updateSlider();
        });

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
            updateSlider();
        });

        // Auto-play slider every 3 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % sliderImages.length;
            updateSlider();
        }, 3000);
    }

    /* ================== DARK / LIGHT MODE ================== */
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        // Load saved theme
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
        }

        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }

    /* ================== BACK-TO-TOP ================== */
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.addEventListener("scroll", () => {
            backToTop.style.display = window.scrollY > 300 ? "block" : "none";
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
