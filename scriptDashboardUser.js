document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    setTimeout(() => {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
        });
    }, 300);

    const cards = document.querySelectorAll('.card-custom');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = "scale(0.98)";
            setTimeout(() => {
                card.style.transform = ""; 
            }, 150);
        });
    });
});