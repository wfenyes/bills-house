

const faqItemHeaders = document.querySelectorAll(".faq-item-header");

faqItemHeaders.forEach(faqItemHeader => {
    faqItemHeader.addEventListener('click', event => {
        faqItemHeader.classList.toggle('active');
    });
});

