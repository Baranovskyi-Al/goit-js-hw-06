const inputFontSize = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');

console.log(inputFontSize.value);

textFontSize.style.fontSize = `${inputFontSize.value}px`;

inputFontSize.addEventListener('input', onInputFontSizeChange);

function onInputFontSizeChange(event) {
  textFontSize.style.fontSize = `${inputFontSize.value}px`;
}
