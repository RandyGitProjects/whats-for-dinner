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
// Query buttons
var sideRadioButton = document.querySelector(".side-radio-button");
var mainRadioButton = document.querySelector(".main-radio-button");
var dessertRadioButton = document.querySelector(".dessert-radio-button");
var entireRadioButton = document.querySelector(".entire-radio-button");
var cookButton = document.querySelector("#button");
var cookPot = document.querySelector(".cookpot");
var display = document.querySelector('.display');

//Add event listeners
sideRadioButton.addEventListener('click', randomSideMeal);
mainRadioButton.addEventListener('click', randomMainMeal);
dessertRadioButton.addEventListener('click', randomDessertMeal);
cookButton.addEventListener('click', showRandomMeal);

//Create functions for event listeners
selectedMeal.innerHTML = ''
function showRandomMeal() {
    cookPot.classList.add('hidden')
    display.classList.remove('hidden')
    if (sideRadioButton.checked) {
        display.innerHTML = `<h2>${selectedMeal}<h2/>`
    } else if (mainRadioButton.checked) {
        display.innerHTML = `<h2>${selectedMeal}<h2/>`
    } else if (dessertRadioButton.checked) {
        display.innerHTML = `<h2>${selectedMeal}<h2/>`
    }
}

//These functions generate random meals for each side, main, and dessert meals and puts it into a empty string called selectedMeal
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