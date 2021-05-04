const clockTime = document.getElementById('time');
const clockDate = document.getElementById('date');

function displayClock() {
  const theTime = new Date();

  const seconds = theTime.getSeconds();

  const minutes = theTime.getMinutes();

  let hours = theTime.getHours();
  const isAm = hours < 12 || hours === 0;
  let amPm = isAm ? 'AM' : 'PM';

  clockTime.textContent = `${renderAmPm(hours)}:${addLeadingZero(
    minutes
  )}:${addLeadingZero(seconds)} ${amPm}`;
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function renderAmPm(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

function displayDate() {
  const theDate = new Date();
  const day = theDays[theDate.getDay()];

  const date = dateSuffix(theDate.getDate());

  const month = theMonths[theDate.getMonth()];

  const year = theDate.getFullYear();

  clockDate.textContent = `${day}, ${month} ${date} ${year}`;
}

function dateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return date + 'st';
      case 2:
        return date + 'nd';
      case 3:
        return date + 'rd';
    }
  }
  return date + 'th';
}

const theDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const theMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

displayClock();
displayDate();

setInterval(() => {
  displayClock();
  displayDate();
}, 1000);
