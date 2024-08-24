const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener('click', ans => {
        faq.classList.toggle('active');
    }); 
});


