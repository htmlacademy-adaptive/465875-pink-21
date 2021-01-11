"use strict";
// HEADER
// variables
let menuToggleButton = document.querySelector(".page-header__toggle");
let menuClosed = document.querySelector(".page-header__nav--closed");
let header = document.querySelector(".page-header");

// show .page-header__toggle only support js
menuToggleButton.classList.add("support-js");

// hide menu with support js
header.classList.add("page-header--closed");

// Open and closed button and menu
menuToggleButton.onclick = function() {
  menuToggleButton.classList.toggle("page-header__toggle--hamburger");
  header.classList.toggle("page-header--closed");
};

// map
let mapBlock = document.querySelector(".footer__map");
mapBlock.classList.add("footer__map-js");
