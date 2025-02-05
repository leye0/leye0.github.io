document.querySelector('.accept-cookies').addEventListener('click', function () {
    document.querySelector('.cookie-popup').style.display = 'none';
    document.cookie = "cookiesAccepted=true; path=/;";
});

document.querySelector('.reject-cookies').addEventListener('click', function () {
    document.querySelector('.cookie-popup').style.display = 'none';
    document.cookie = "cookiesAccepted=false; path=/;";
});

window.onload = () => {
    if (!document.cookie.includes('cookiesAccepted=true')) {
        document.getElementById('cookie-popup').style.display = 'block';
    }
};

const contactForm = document.getElementById('contactForm');
const contactGroup = document.querySelector('.contact-form-group')
const contactButton = document.querySelector('.contact-button');

let setContactButton = () => contactButton.innerText = (getLang() === 'en' ? 'Contact us' : 'Contactez-nous');

document.addEventListener('click', function(event) {
    if (contactGroup.classList.contains('visible') && !contactForm.contains(event.target)) {
        contactGroup.classList.remove('visible');
        document.querySelector('.overlay-panel').classList.remove('overlay');
    }
});

contactButton.addEventListener('click', function () {
    contactGroup.classList.add('visible');
    document.querySelector('.overlay-panel').classList.add('overlay');
});

function setContactForm() {
    const form = document.getElementById('contactForm');
    let formPlaceholders = {
        'lastname': 'Nom',
        'firstname': 'Prénom',
        'email': 'Email',
        'business': 'Compagnie',
        'number': 'Téléphone',
        'envoyer': 'Envoyer',
        'lang': 'fr',
    };

    if (getLang() === 'en') {
        formPlaceholders = {
            'lastname': 'Last name',
            'firstname': 'First name',
            'email': 'Email',
            'business': 'Company',
            'number': 'Phone number',
            'envoyer': 'Send',
            'lang': 'en',
        };
    }
    for (const key in formPlaceholders) {
        if (formPlaceholders.hasOwnProperty(key)) {
            const element = form.elements.namedItem(key);
            if (element) {
                element.placeholder = formPlaceholders[key];
            }
        }
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    document.querySelector('.form-button').classList.add('disable');

    fetch('https://script.google.com/macros/s/AKfycbxwCsV-zOYj5HB9hRk5e91wWvL74044uGGSh58VEPZKPxCq6WUv4OLVk5G0VDQYATBkGA/exec', {
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
            console.error('Error:', error);
        });
}

document.addEventListener('language-changed', function(event) {
    init();
});

function init() {
    setContactForm();
    buildServicesDivs(getLang());
    setBlockQuote(getLang());
}

init();