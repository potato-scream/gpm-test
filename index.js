const formModal = document.querySelector('.modal-form');
const closeForm = document.querySelector('.modal-form__close');
const formButton = document.querySelector('.steps__button');

const burger = document.querySelector('.header__open-btn');
const nav = document.querySelector('.header__modal');
const closeNav = document.querySelector('.header__close-btn');

const form = document.querySelector('.modal-form__form');
const formSubmit = document.querySelector('.form__submit');

burger.addEventListener('click', function () {
    nav.classList.add('header__modal--visible');
});

closeNav.addEventListener('click', function () {
    nav.classList.remove('header__modal--visible');
});

formButton.addEventListener('click', function () {
    formModal.classList.add('modal-form--visible');

    document.querySelector('.form__input#name').focus();
});

closeForm.addEventListener('click', function () {
    formModal.classList.remove('modal-form--visible');
});

formSubmit.addEventListener('click', function (event) {
    if (!form.querySelector('[name="name"]').validity.valid) {
        window.alert('Введите имя и фамилию');
        return;
    }

    if (!form.querySelector('[name="city"]').validity.valid) {
        window.alert('Введите город');
        return;
    }

    if (!form.querySelector('[name="phone"]').validity.valid) {
        window.alert('Введите номер телефона');
        return;
    }

    if (!form.querySelector('[name="email"]').validity.valid) {
        window.alert('Введите правильный email');
        return;
    }

    if (!form.querySelector('[name="relative-name"]').validity.valid) {
        window.alert('Введите имя и фамилию родственника');
        return;
    }

    if (!form.querySelector('[name="relation"]').validity.valid) {
        window.alert('Введите степень родства');
        return;
    }

    if (!form.querySelector('[name="story"]').validity.valid) {
        window.alert('Напишите историю');
        return;
    }
});
