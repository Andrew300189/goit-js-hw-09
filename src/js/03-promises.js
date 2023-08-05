import Notiflix from 'notiflix';

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

  const form = event.target;
  const initialDelay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  console.clear();

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

  Promise.all(promises).then(() => {
    Notiflix.Notify.Info(`All promises resolved successfully.`);
  });
}

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
