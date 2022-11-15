const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satarday",
];

const giveaway = document.querySelector('.giveway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2022, 8, 13, 0, 0,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth()-1;
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:0${minutes}pm`;

// future time in ms　元期からの経過時間をmsで取得
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const time = futureTime - today;
  //1s   = 1000ms
  //1m   = 60s
  //1hr  = 60min
  //1day = 24hr

  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calculate all values
  let days = Math.floor(time / oneDay);
  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMinute);
  let seconds = Math.floor((time % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if( time < 0 ){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry,this giveaway has expired</4>`;
  }
}
//countdown
let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();