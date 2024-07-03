document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero').clientHeight;
    

    window.addEventListener('scroll', function() {
        if (window.scrollY < heroSection) {
            ocultaElementos();
        } else {
            exibeElementos();
        }
    })



    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const abaAlvo = button.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id='${abaAlvo}']`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active')
            removeBotaoAtivo();
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreFecha);
    }
})

function abreFecha(e) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = e.target.parentNode;
    elementoPai.classList.toggle(classe);
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function ocultaElementos() {
    const header = document.querySelector('.header')
    header.classList.add('header--is-hidden')
}

function exibeElementos() {
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}