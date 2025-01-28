document.querySelector('.accept-cookies').addEventListener('click', function () {
    document.querySelector('.cookie-popup').style.display = 'none';
    document.cookie = "cookiesAccepted=true; path=/;";
});

document.querySelector('.reject-cookies').addEventListener('click', function () {
    document.querySelector('.cookie-popup').style.display = 'none';
    document.cookie = "cookiesAccepted=false; path=/;";
});

// Check cookie on load
window.onload = function () {
    if (!document.cookie.includes('cookiesAccepted=true')) {
        document.getElementById('cookie-popup').style.display = 'block';
    }
};

const contactForm = document.getElementById('contactForm');
const contactGroup = document.querySelector('.contact-form-group')
const contactButton = document.querySelector('.contact-button');

document.addEventListener('click', function(event) {
    if (contactGroup.classList.contains('visible') && !contactForm.contains(event.target)) {
        contactButton.innerText = 'Contactez-nous';
        contactGroup.classList.remove('visible');
        document.querySelector('.overlay-panel').classList.remove('overlay');
    }
});

contactButton.addEventListener('click', function () {
    contactButton.innerText = 'Contactez-nous';
    contactGroup.classList.add('visible');
    document.querySelector('.overlay-panel').classList.add('overlay');
});

function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    document.querySelector('.form-button').classList.add('disable');

    fetch('https://script.google.com/macros/s/AKfycbx_scWEN6n-M_sbBd99i0n6AuYyZPqYKXoMNLlzq9syzjThLFs_53oRn2FuoneFHpO2LQ/exec', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.text())
        .then(data => {
            document.querySelector('.form-button').classList.remove('disable');
            document.querySelector('.contact-form-group').classList.remove('visible');
            document.querySelector('.overlay-panel').classList.remove('overlay');
            document.querySelector('.contact-button').innerText = data;
        })
        .catch(error => {
            document.querySelector('.form-button').classList.remove('disable');
            console.error('Erreur avec le formulaire:', error);
        });
}