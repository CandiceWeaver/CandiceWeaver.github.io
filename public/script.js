'use strict';

// Functionality for mobile menu
const mobileMenu = document.querySelector('.navigation__mobile');
const mobileMenuOpen = document.querySelector('.navigation__mobile--open');
const mobileMenuClose = document.querySelector('.navigation__mobile--close');
const navLinks = document.querySelector('.navigation__links');
const navigation = document.querySelector('.navigation');

mobileMenu.addEventListener('click', function () {
  navLinks.classList.toggle('hidden');
  mobileMenuOpen.classList.toggle('hidden');
  mobileMenuClose.classList.toggle('hidden');
  navigation.classList.toggle('active');
});
