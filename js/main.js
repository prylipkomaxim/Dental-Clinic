'use strict'
const menuIcon = document.querySelector('.menu__icon-block');
const menuBody = document.querySelector('.menu__body-block');
const body = document.body;

if (menuBody && menuIcon) {
    menuIcon.addEventListener('click', () => {
        menuBody.classList.toggle('burger-active');
        body.classList.toggle('burger-active');
    })

    menuBody.addEventListener('click', (e) => {
        if(!e.target.closest('.menu__body')) {
            menuBody.classList.remove('burger-active');
            body.classList.remove('burger-active');
        }
    })

    window.addEventListener('resize', () => {
        const windowWidth = Math.max(document.documentElement.clientWidth);
        if (windowWidth > 1024) {
            menuBody.classList.remove('burger-active');
            body.classList.remove('burger-active');
        }
    })
}
const parentOriginalOne = document.querySelector('.header__container');
const parentOriginalTwo = document.querySelector('.header__feedback');
const parentNext = document.querySelector('.menu__body');
const childOne = document.querySelector('.header__worktime');
const childTwo = document.querySelector('.header__phones');

function childActivitiesForward () {
    parentNext.insertBefore(childOne, parentNext.children[1]);
    childOne.classList.add('done');
    parentNext.insertBefore(childTwo, parentNext.children[2]);
    childTwo.classList.add('done');
}

function childActivitiesBack () {
    parentOriginalOne.insertBefore(childOne, parentOriginalOne.children[2]);
    childOne.classList.remove('done');
    parentOriginalTwo.insertBefore(childTwo, parentOriginalTwo.children[1]);
    childTwo.classList.remove('done');
}

window.addEventListener('resize', () => {
    let viewortWidth = document.documentElement.clientWidth;

    if (viewortWidth <= 1024) {
        if (!childOne.classList.contains('done') && !childTwo.classList.contains('done')) {
            childActivitiesForward ();
        }
    } else {
        if (childOne.classList.contains('done') && childTwo.classList.contains('done')) {
            childActivitiesBack ();
        }
    }
})

document.addEventListener('DOMContentLoaded', () => {
    let viewortWidth = document.documentElement.clientWidth;

    if (viewortWidth <= 1024) {
        childActivitiesForward ();
    }
})

const parentOriginalThree = document.querySelector('.header__container');
const parentOriginalFour = document.querySelector('.header__feedback');
const childThree = document.querySelector('.header__address');
const childFour = document.querySelector('.header__messengers');

function childActivitiesForwardNextPart () {
    parentNext.insertBefore(childThree, parentNext.children[0]);
    childThree.classList.add('done');
    parentNext.insertBefore(childFour, parentNext.children[3]);
    childFour.classList.add('done');
}

function childActivitiesBackNextPart () {
    parentOriginalThree.insertBefore(childThree, parentOriginalThree.children[1]);
    childThree.classList.remove('done');
    parentOriginalFour.insertBefore(childFour, parentOriginalFour.children[0]);
    childFour.classList.remove('done');
}

window.addEventListener('resize', () => {
    let viewortWidth = document.documentElement.clientWidth;

    if (viewortWidth <= 768) {
        if (!childThree.classList.contains('done') && !childFour.classList.contains('done')) {
            childActivitiesForwardNextPart ();
        }
    } else {
        if (childThree.classList.contains('done') && childFour.classList.contains('done')) {
            childActivitiesBackNextPart ();
        }
    }
})

document.addEventListener('DOMContentLoaded', () => {
    let viewortWidth = document.documentElement.clientWidth;

    if (viewortWidth <= 768) {
        childActivitiesForwardNextPart ();
    }
})
new Swiper('.stock__items-block',{
    slidesPerView:3,
    spaceBetween:30,

    navigation: {
        prevEl: '.stock__proposes-button_prev',
        nextEl: '.stock__proposes-button_next'
    },

    breakpoints: {
        320: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        }
    },
})
const stockPopupBtns = document.querySelectorAll('.stock__item-btn');
const stockPopupClose = document.querySelector('.stock-popup__close');
const stockPopup = document.querySelector('.stock-popup');

if (stockPopupBtns && stockPopup) {
    for (let i = 0; i < stockPopupBtns.length; i++) {
        const stockPopupBtn = stockPopupBtns[i];
        stockPopupBtn.addEventListener('click', (e) => {
            stockPopup.classList.add('popup-active');
            e.preventDefault();
        })
    }
    stockPopupClose.addEventListener('click', () => {
        stockPopup.classList.remove('popup-active');
    })
    stockPopup.addEventListener('click', (e) => {
        if(!e.target.closest('.stock-popup__body')) {
            stockPopup.classList.remove('popup-active');
        }
    })
}

const servicesPopupBtns = document.querySelectorAll('.services__short-item-button_prices');
const servicesPopupClose = document.querySelector('.services-popup__close');
const servicesPopup = document.querySelector('.services-popup');

if (servicesPopupBtns && servicesPopup) {
    for (let i = 0; i < servicesPopupBtns.length; i++) {
        const servicesPopupBtn = servicesPopupBtns[i];
        servicesPopupBtn.addEventListener('click', (e) => {
            servicesPopup.classList.add('popup-active');
            e.preventDefault();
        })
    }
    servicesPopupClose.addEventListener('click', () => {
        servicesPopup.classList.remove('popup-active');
    })
    servicesPopup.addEventListener('click', (e) => {
        if(!e.target.closest('.services-popup__body')) {
            servicesPopup.classList.remove('popup-active');
        }
    })
}