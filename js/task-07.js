const inputFontSize = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');

inputFontSize.addEventListener('input', onInputFontSizeChange);

function onInputFontSizeChange(event) {
  textFontSize.style.fontSize = `${inputFontSize.value}px`;
}
