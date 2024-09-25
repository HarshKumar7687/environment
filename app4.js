// Get all question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle the answer display
        const answer = question.nextElementSibling;
        const isActive = answer.style.display === 'block';

        // Hide other answers
        document.querySelectorAll('.faq-answer').forEach(item => {
            item.style.display = 'none';
        });

        // Reset all '+' symbols
        document.querySelectorAll('.faq-question span').forEach(span => {
            span.textContent = '+';
        });

        // Show/Hide current answer and change symbol
        answer.style.display = isActive ? 'none' : 'block';
        question.querySelector('span').textContent = isActive ? '+' : '-';
    });
});


//menu

const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

menuBtn.addEventListener('click', () => {
dropdownMenu.classList.toggle('show');
});

// Optional: Close the dropdown when clicking outside
window.addEventListener('click', (event) => {
if (!menuBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
dropdownMenu.classList.remove('show');
}
});
