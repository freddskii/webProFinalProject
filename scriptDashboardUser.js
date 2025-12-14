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
        if (!card.classList.contains('modal-content')) {
            card.addEventListener('click', () => {
                card.style.transform = "scale(0.98)";
                setTimeout(() => {
                    card.style.transform = ""; 
                }, 150);
            });
        }
    });

    const detailModal = document.getElementById('detailModal');
    if (detailModal) {
        detailModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget;
            
            const row = button.closest('.list-row');
            
            let jobName = "Job Name";
            
            const titleElement = row.querySelector('.col-5 span.fw-bold');
            if (titleElement) {
                jobName = titleElement.textContent;
            }

            const modalTitle = detailModal.querySelector('#modalJobName');
            modalTitle.textContent = jobName;
        });
    }
});