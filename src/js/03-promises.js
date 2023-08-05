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
  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  // Очищаем консоль перед новыми сообщениями
  console.clear();

  // Создаем промисы с заданными значениями
  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay).then(
      ({ position, delay }) => {
        Notiflix.Notify.Success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      },
      ({ position, delay }) => {
        Notiflix.Notify.Failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    );
    delay += step;
  }
}
