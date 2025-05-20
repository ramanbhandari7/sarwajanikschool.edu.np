// HTML content load भइसकेपछि मात्र यो कोड चल्नेछ
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger button र navigation list element हरूलाई ल्याउँछ
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    // यदि element हरू भेटियो भने मात्र event listener set गर्ने
    if (hamburger && navList) {
        // Hamburger मा क्लिक गर्दा navList मा 'show' class थप्ने/हटाउने
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('show');
        });

        // Optional: Single Page Website मा लिंक क्लिक गर्दा Menu बन्द गर्ने
        // Navigation list भित्रका सबै 'a' (link) हरू खोज्छ
        navList.querySelectorAll('a').forEach(link => {
            // प्रत्येक link मा क्लिक गर्दा
            link.addEventListener('click', () => {
                // यदि navigation list मा 'show' class छ भने त्यसलाई हटाउने (menu बन्द गर्ने)
                if (navList.classList.contains('show')) {
                    navList.classList.remove('show');
                }
                 // Smooth Scrolling effect यही JavaScript मा थप्न सकिन्छ
                 // उदाहरणका लागि: event.preventDefault(); र scrollIntoView() प्रयोग गरेर
            });
        });
    }
});
