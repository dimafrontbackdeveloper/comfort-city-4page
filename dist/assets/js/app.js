/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// set blue height\r\nconst blurBlock = document.querySelector('.blur');\r\nblurBlock.style.height = `${document.querySelector('.filter__column').offsetHeight}px`;\r\n\r\n// slider for filters\r\nconst filterRow = document.querySelector('.filter__row');\r\nfilterRow.addEventListener('mousewheel', (e) => {\r\n  console.log('qwe');\r\n  if (e.wheelDelta > 0) {\r\n    filterRow.scrollLeft -= e.wheelDelta;\r\n  } else if (e.wheelDelta != 0) {\r\n    filterRow.scrollLeft -= e.wheelDelta;\r\n  }\r\n  e.preventDefault();\r\n});\r\n\r\n// products slider\r\nnew Swiper('.items__swiper-container', {\r\n  pagination: {\r\n    el: '.items__swiper-pagination',\r\n    clickable: true,\r\n  },\r\n  effect: 'fade',\r\n  fadeEffect: {\r\n    crossFade: true,\r\n  },\r\n  allowTouchMove: false,\r\n});\r\n\r\n// custom bullets for products\r\nconst filterBullets = document.querySelectorAll('.filter__column'); // custom bullets\r\nconst bullets = document.querySelectorAll('.swiper-pagination-bullet'); // standard bullets\r\n\r\nfilterBullets.forEach((bul, i) => {\r\n  // on click custom bullets\r\n  bul.addEventListener('click', () => {\r\n    // remove from everyone active class\r\n    filterBullets.forEach((item) => {\r\n      item.classList.remove('filter__column--active');\r\n    });\r\n    bul.classList.add('filter__column--active'); // add active class\r\n    bullets[i].click(); // click on not custom bullet\r\n  });\r\n});\r\n\r\n// intro slider\r\nnew Swiper('.intro__swiper-container', {\r\n  pagination: {\r\n    el: '.intro__swiper-pagination',\r\n    clickable: true,\r\n  },\r\n  effect: 'fade',\r\n  fadeEffect: {\r\n    crossFade: true,\r\n  },\r\n});\r\n\r\n// products calendar on click to date\r\nconst workDays = [\r\n  { days: [1] },\r\n  { days: [2] },\r\n  { days: [3] },\r\n  { days: [4, 5, 6, 7, 8, 9] },\r\n  { days: [10] },\r\n  { days: [11] },\r\n  { days: [12, 13, 14, 15, 16] },\r\n  { days: [17] },\r\n  { days: [18] },\r\n  { days: [19] },\r\n  { days: [22, 23] },\r\n  { days: [24] },\r\n  { days: [25] },\r\n  { days: [29] },\r\n  { days: [30] },\r\n];\r\n\r\nconst productBullets = document.querySelectorAll('.intro__column-item');\r\nconst introSwiperPaginationItems = document.querySelector('.intro__swiper-pagination').childNodes;\r\n\r\n// set change slide\r\nworkDays.forEach((item, i) => {\r\n  item.days.forEach((day) => {\r\n    productBullets[day - 1].addEventListener('click', () => {\r\n      introSwiperPaginationItems[i].click();\r\n    });\r\n  });\r\n});\r\n\r\nproductBullets.forEach((bullet, i) => {\r\n  bullet.addEventListener('click', () => {\r\n    productBullets.forEach((item) => {\r\n      item.classList.remove('intro__column-item--active');\r\n      item.classList.remove('intro__column-item--active-first');\r\n      item.classList.remove('intro__column-item--active-last');\r\n    });\r\n\r\n    const activeDay = Number(bullet.textContent);\r\n    workDays.forEach((item, i) => {\r\n      if (item.days.includes(activeDay)) {\r\n        workDays[i].days.forEach((day, ind) => {\r\n          const arrLength = workDays[i].days.length;\r\n\r\n          productBullets[day - 1].classList.add('intro__column-item--active');\r\n\r\n          // if day first in a calendar (01, 08, 15 etc)\r\n          if (\r\n            Number(productBullets[day - 1].textContent) === 1 ||\r\n            Number(productBullets[day - 1].textContent) === 8 ||\r\n            Number(productBullets[day - 1].textContent) === 15 ||\r\n            Number(productBullets[day - 1].textContent) === 22 ||\r\n            Number(productBullets[day - 1].textContent) === 29\r\n          ) {\r\n            productBullets[day - 1].classList.add('intro__column-item--active-first');\r\n          }\r\n\r\n          // if day last in a calendar (07, 14, 21 etc)\r\n          if (Number(productBullets[day - 1].textContent) % 7 === 0) {\r\n            productBullets[day - 1].classList.add('intro__column-item--active-last');\r\n          }\r\n\r\n          // if first/last\r\n          if (ind === 0) {\r\n            productBullets[day - 1].classList.add('intro__column-item--active-first');\r\n          }\r\n\r\n          if (ind === arrLength - 1) {\r\n            productBullets[day - 1].classList.add('intro__column-item--active-last');\r\n          }\r\n\r\n          // if el has two classes (intro__column-item--active-first & intro__column-item--active-last)\r\n          if (\r\n            productBullets[day - 1].classList.contains('intro__column-item--active-first') &&\r\n            productBullets[day - 1].classList.contains('intro__column-item--active-last')\r\n          ) {\r\n            productBullets[day - 1].style.borderRadius = '60px';\r\n          }\r\n        });\r\n      }\r\n    });\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;