function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector('div.widget');
const widgetButtonColorChange = document.querySelector('div.widget button.change-color');
const colorValue = document.querySelector('div.widget span.color');

widgetButtonColorChange.addEventListener('click', OnClickWidgetButtonColorChange);

function OnClickWidgetButtonColorChange() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.innerHTML = getRandomHexColor();
}
