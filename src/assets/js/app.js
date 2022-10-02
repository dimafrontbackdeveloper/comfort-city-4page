// set blue height
const blurBlock = document.querySelector('.blur');
blurBlock.style.height = `${document.querySelector('.filter__column').offsetHeight}px`;

// slider for filters
const filterRow = document.querySelector('.filter__row');
filterRow.addEventListener('mousewheel', (e) => {
  console.log('qwe');
  if (e.wheelDelta > 0) {
    filterRow.scrollLeft -= e.wheelDelta;
  } else if (e.wheelDelta != 0) {
    filterRow.scrollLeft -= e.wheelDelta;
  }
  e.preventDefault();
});

// products slider
new Swiper('.items__swiper-container', {
  pagination: {
    el: '.items__swiper-pagination',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  allowTouchMove: false,
});

// custom bullets for products
const filterBullets = document.querySelectorAll('.filter__column'); // custom bullets
const bullets = document.querySelectorAll('.swiper-pagination-bullet'); // standard bullets

filterBullets.forEach((bul, i) => {
  // on click custom bullets
  bul.addEventListener('click', () => {
    // remove from everyone active class
    filterBullets.forEach((item) => {
      item.classList.remove('filter__column--active');
    });
    bul.classList.add('filter__column--active'); // add active class
    bullets[i].click(); // click on not custom bullet
  });
});

// intro slider
new Swiper('.intro__swiper-container', {
  pagination: {
    el: '.intro__swiper-pagination',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});

// products calendar on click to date
const workDays = [
  { days: [1] },
  { days: [2] },
  { days: [3] },
  { days: [4, 5, 6, 7, 8, 9] },
  { days: [10] },
  { days: [11] },
  { days: [12, 13, 14, 15, 16] },
  { days: [17] },
  { days: [18] },
  { days: [19] },
  { days: [22, 23] },
  { days: [24] },
  { days: [25] },
  { days: [29] },
  { days: [30] },
];

const productBullets = document.querySelectorAll('.intro__column-item');
const introSwiperPaginationItems = document.querySelector('.intro__swiper-pagination').childNodes;

// set change slide
workDays.forEach((item, i) => {
  item.days.forEach((day) => {
    productBullets[day - 1].addEventListener('click', () => {
      introSwiperPaginationItems[i].click();
    });
  });
});

productBullets.forEach((bullet, i) => {
  bullet.addEventListener('click', () => {
    productBullets.forEach((item) => {
      item.classList.remove('intro__column-item--active');
      item.classList.remove('intro__column-item--active-first');
      item.classList.remove('intro__column-item--active-last');
    });

    const activeDay = Number(bullet.textContent);
    workDays.forEach((item, i) => {
      if (item.days.includes(activeDay)) {
        workDays[i].days.forEach((day, ind) => {
          const arrLength = workDays[i].days.length;

          productBullets[day - 1].classList.add('intro__column-item--active');

          // if day first in a calendar (01, 08, 15 etc)
          if (
            Number(productBullets[day - 1].textContent) === 1 ||
            Number(productBullets[day - 1].textContent) === 8 ||
            Number(productBullets[day - 1].textContent) === 15 ||
            Number(productBullets[day - 1].textContent) === 22 ||
            Number(productBullets[day - 1].textContent) === 29
          ) {
            productBullets[day - 1].classList.add('intro__column-item--active-first');
          }

          // if day last in a calendar (07, 14, 21 etc)
          if (Number(productBullets[day - 1].textContent) % 7 === 0) {
            productBullets[day - 1].classList.add('intro__column-item--active-last');
          }

          // if first/last
          if (ind === 0) {
            productBullets[day - 1].classList.add('intro__column-item--active-first');
          }

          if (ind === arrLength - 1) {
            productBullets[day - 1].classList.add('intro__column-item--active-last');
          }

          // if el has two classes (intro__column-item--active-first & intro__column-item--active-last)
          if (
            productBullets[day - 1].classList.contains('intro__column-item--active-first') &&
            productBullets[day - 1].classList.contains('intro__column-item--active-last')
          ) {
            productBullets[day - 1].style.borderRadius = '60px';
          }
        });
      }
    });
  });
});
