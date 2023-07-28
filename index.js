const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {

    let interval;
    let value = parseInt(seconds, 10);
                        
     interval = setInterval(function() {
      const timer  = new Date(value * 1000).toISOString().substr(11, 8)

        if (value > 0) {
            value--;
            timerEl.innerText = timer;
        } else {
            clearInterval(interval);
            timerEl.innerText = "00:00:00";
            interval = 'finished'
        }
        
    }, 1000);
  
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '');

});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});