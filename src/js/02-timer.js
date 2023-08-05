// Импортируем flatpickr и стили для него
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// Импортируем notiflix
import Notiflix from "notiflix";

// Опции для flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      Notiflix.Notify.failure("Please choose a date in the future");
      return;
    }

    startButton.disabled = false;
  },
};

// Инициализируем flatpickr
const flatpickrInstance = flatpickr("#datetime-picker", options);

const startButton = document.querySelector("[data-start]");
const timer = document.querySelector(".timer");
let intervalId = null;

startButton.addEventListener("click", () => {
  if (intervalId) return;

  const selectedDate = flatpickrInstance.selectedDates[0]; // Используем ранее созданный экземпляр flatpickr
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    Notiflix.Notify.failure("Please choose a date in the future");
    return;
  }

  intervalId = setInterval(updateTimer, 1000);
  updateTimer();
  startButton.disabled = true;
});

function updateTimer() {
  const selectedDate = flatpickrInstance.selectedDates[0]; // Используем ранее созданный экземпляр flatpickr
  const currentDate = new Date();
  const timeDifference = selectedDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(intervalId);
    intervalId = null;
    startButton.disabled = false;
  }

  const time = convertMs(timeDifference);
  renderTime(time);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

function renderTime(time) {
  const daysElement = timer.querySelector("[data-days]");
  const hoursElement = timer.querySelector("[data-hours]");
  const minutesElement = timer.querySelector("[data-minutes]");
  const secondsElement = timer.querySelector("[data-seconds]");

  daysElement.textContent = addLeadingZero(time.days);
  hoursElement.textContent = addLeadingZero(time.hours);
  minutesElement.textContent = addLeadingZero(time.minutes);
  secondsElement.textContent = addLeadingZero(time.seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}
