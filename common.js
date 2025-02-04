function getLang() {
    return (localStorage.getItem('lang') === 'en' || document.cookie.includes('lang=en') || navigator.language.indexOf('fr') === -1)
    ? 'en'
        : 'fr';
}

function changeLang(lang) {
    let otherLang = lang === 'fr' ? 'en' : 'fr';
    document.cookie = `lang=${lang}; path=/;`;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('.lang-' + lang).forEach(function (element) {
        element.classList.remove('hidden');
    });
    document.querySelectorAll('.lang-' + otherLang).forEach(function (element) {
        element.classList.add('hidden');
    });

    document.dispatchEvent(new CustomEvent('language-changed'));
}

changeLang(getLang());