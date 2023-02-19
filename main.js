var side = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies",
]

var mains = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza",
]

var dessert = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs",
]

var sideRadioButton = document.querySelector('.side-radio-button');
var mainRadioButton = document.querySelector('.main-radio-button');
var dessertRadioButton = document.querySelector('.dessert-radio-button');
var entireRadioButton = document.querySelector('.entire-radio-button');
var cookButton = document.querySelector('#button');
var clearButton = document.querySelector('.clear-button');
var cookPot = document.querySelector('.cookpot');
var randomMealDisplay = document.querySelector('.random-meal-display');
var youShouldMake = document.querySelector('.should-make')

sideRadioButton.addEventListener('click', randomSideMeal);
mainRadioButton.addEventListener('click', randomMainMeal);
dessertRadioButton.addEventListener('click', randomDessertMeal);
cookButton.addEventListener('click', showRandomMeal);
clearButton.addEventListener('click', deleteSelectedMeal)

function randomDessertMeal() {
    var randomIndex = Math.floor(Math.random() * dessert.length)
    return selectedMeal = dessert[randomIndex];
}

function randomMainMeal() {
    var randomIndex = Math.floor(Math.random() * mains.length)
    return selectedMeal = mains[randomIndex];
}

function randomSideMeal() {
    var randomIndex = Math.floor(Math.random() * side.length)
    return selectedMeal = side[randomIndex];
}

function showRandomMeal() {
    randomMealDisplay.classList.remove('hidden')
    var selectedMeal = '';
    if (sideRadioButton.checked) {
        selectedMeal = randomSideMeal();
        clearButton.classList.remove('hidden')
        cookPot.classList.add('hidden')
        randomMealDisplay.innerHTML = `<h4 class="should-make"><em>You should make:</em></h4><h2>${selectedMeal}!</h2>`
    } else if (mainRadioButton.checked) {
        selectedMeal = randomMainMeal();
        cookPot.classList.add('hidden')
        clearButton.classList.remove('hidden')
        randomMealDisplay.innerHTML = `<h4 class="should-make"><em>You should make:</em></h4><h2>${selectedMeal}!</h2>`
    } else if (dessertRadioButton.checked) {
        selectedMeal = randomDessertMeal();
        cookPot.classList.add('hidden')
        clearButton.classList.remove('hidden')
        randomMealDisplay.innerHTML = `<h4 class="should-make"><em>You should make:</em></h4><h2>${selectedMeal}!</h2>`
    }
}

function randomDessertMeal() {
    var randomIndex = Math.floor(Math.random() * dessert.length)
    return selectedMeal = dessert[randomIndex]
}

function randomMainMeal() {
    var randomIndex = Math.floor(Math.random() * mains.length)
    return selectedMeal = mains[randomIndex]
}

function randomSideMeal() {
    var randomIndex = Math.floor(Math.random() * side.length)
    return selectedMeal = side[randomIndex]
}

function deleteSelectedMeal() {
    if (selectedMeal) {
        randomMealDisplay.classList.add('hidden')
        clearButton.classList.add('hidden')
        cookPot.classList.remove('hidden')
    } 
}