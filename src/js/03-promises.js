import Notiflix from 'notiflix';

// Функция, которая создает и возвращает промисы с задержкой
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleSubmit(event) {
  event.preventDefault();

  // Получаем значения из полей формы
  const form = event.target;
  const initialDelay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  // Очищаем консоль перед новыми сообщениями
  console.clear();

  // Создаем массив промисов с заданными значениями и уникальными задержками
  const promises = Array.from({ length: amount }, (_, i) => {
    const position = i + 1;
    const delay = initialDelay + i * step;
    return createPromise(position, delay).then(
      ({ position, delay }) => {
        Notiflix.Notify.Success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      },
      ({ position, delay }) => {
        Notiflix.Notify.Failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    );
  });

  // Ожидаем выполнения всех промисов и отображаем уведомления
  Promise.all(promises).then(() => {
    Notiflix.Notify.Info(`All promises resolved successfully.`);
  });
}

// Получаем форму и назначаем обработчик события сабмита
const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
