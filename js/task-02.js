const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const ingredientsItems = document.createElement('li');
  ingredientsItems.textContent = ingredient;
  ingredientsItems.classList.add('item');

  return ingredientsItems;
});

ingredientsList.append(...elements);
