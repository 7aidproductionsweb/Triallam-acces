document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulation d'envoi (tu pourras lier cela à un service d'email plus tard)
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');
        
        // Logique pour récupérer les données si besoin
        const email = form.querySelector('input').value;
        const type = form.querySelector('select').value;
        console.log("Nouveau testeur :", email, type);
    });

    // Animation simple au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});