document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const WEBHOOK_URL = 'https://ai-9-productions.app.n8n.cloud/webhook/triallam-mail';
    const RECIPIENT_EMAIL = '7aiproductions@gmail.com';
    const REDIRECT_URL = 'https://7aidproductionsweb.github.io/teaserhtml-triallam-app/';
    const REDIRECT_DELAY_MS = 5000;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = form.querySelector('input').value.trim();
        const type = form.querySelector('select').value;

        if (!WEBHOOK_URL || WEBHOOK_URL.includes('YOUR_N8N_WEBHOOK_URL')) {
            alert('Webhook non configure.');
            return;
        }

        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    body: [
                        {
                            recipientEmail: RECIPIENT_EMAIL,
                            senderEmail: email,
                            message: `Demande de testeur TRIALLAM - Profil: ${type}`,
                            subject: 'Demande de test TRIALLAM',
                            sentAt: new Date().toISOString()
                        }
                    ]
                })
            });

            form.classList.add('hidden');
            successMsg.classList.remove('hidden');
            setTimeout(() => {
                if (REDIRECT_URL) {
                    window.location.href = REDIRECT_URL;
                }
            }, REDIRECT_DELAY_MS);
        } catch (error) {
            console.error('Webhook error:', error);
            alert('Erreur lors de l\'envoi. Reessaie plus tard.');
        }
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
