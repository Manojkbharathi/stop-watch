'use strict';

let second = 60;
let minutes = 59;
let hours = 23;
let days = 1;

setInterval(() => {
  second--;

  if (second === 1) {
    minutes--;
    second = 59;
    if (minutes === 0) {
      hours--;
      minutes = 59;
    }
    if (hours === 0) {
      days--;
      hours = 0;
    }
    if (days === 1) {
      // second = 0;
      // minutes = 0;
      // hours = 0;
    }
  }

  if (days === 2) {
    second = 0;
    minutes = 0;
    hours = 0;
  }

  let secondscount = (document.querySelector('.seconds').innerText = second);
  const minutescount = (document.querySelector('.minutes').innerText = minutes);

  const hourscount = (document.querySelector('.hours').innerText = hours);
  const dayscount = (document.querySelector('.days').innerText = days);
}, 1000);
