let counterValue = 0;

const value = document.querySelector('#value');
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

incrementBtn.addEventListener('click', incrementBtnClickHandler);
decrementBtn.addEventListener('click', decrementBtnClickHandler);

function incrementBtnClickHandler() {
  counterValue += 1;
  value.innerHTML = counterValue;
}

function decrementBtnClickHandler() {
  counterValue -= 1;
  value.innerHTML = counterValue;
}
