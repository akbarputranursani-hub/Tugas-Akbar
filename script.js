// ========== DARK MODE TOGGLE ==========
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Ubah teks tombol
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Light Mode";
    } else {
        toggleBtn.textContent = "Dark Mode";
    }
});

// ========== FAQ ACCORDION ==========
const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", function () {
        const answer = this.nextElementSibling;
        answer.classList.toggle("show-answer");
    });
});
