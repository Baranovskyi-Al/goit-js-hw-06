const categories = document.querySelector('#categories');

const categoriesList = categories.querySelectorAll('li.item');

const categoryAnimals = categoriesList[0];

const categoryProducts = categoriesList[1];

const categoryTechnologies = categoriesList[2];

// Number of categories

const numberOfCategories = categoriesList.length;
const messageNumberOfCat = `Number of categories: ${numberOfCategories}`;
console.log(messageNumberOfCat);

// Animals

const categoryAnimalsCaption = categoryAnimals.querySelector('h2').textContent;
console.log(categoryAnimalsCaption);

const numberOfAnimals = categoryAnimals.querySelectorAll('li').length;
const messageNumberOfAnim = `Elements: ${numberOfAnimals}`;
console.log(messageNumberOfAnim);

// Products
const categoryProductsCaption = categoryProducts.querySelector('h2').textContent;
console.log(categoryProductsCaption);

const numberOfProducts = categoryProducts.querySelectorAll('li').length;
const messageNumberOfProducts = `Elements: ${numberOfProducts}`;
console.log(messageNumberOfProducts);

// Technologies
const categoryTechnologiesCaption = categoryTechnologies.querySelector('h2').textContent;
console.log(categoryTechnologiesCaption);

const numberOfTechnologies = categoryTechnologies.querySelectorAll('li').length;
const messageNumberOfTechnologies = `Elements: ${numberOfTechnologies}`;
console.log(messageNumberOfTechnologies);
