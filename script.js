document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Form submitted:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Here you would typically send the form data to a server
        // For now, we'll just log it and show an alert
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});

