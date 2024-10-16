document.addEventListener("DOMContentLoaded", function() {
    const faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach(button => {
        button.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            const arrow = this.querySelector(".arrow");

            // Toggle active class and max-height for smooth dropdown
            answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
            
            // Toggle the arrow direction
            arrow.textContent = arrow.textContent === "▼" ? "▲" : "▼";
        });
    });
});

