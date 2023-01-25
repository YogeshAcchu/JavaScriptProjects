
const random_mealElement = document.getElementById('random-meal');



getRandomMeal();

async function getRandomMeal() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const responseData = await response.json();
    const randomMeal = responseData.meals[0];

    console.log(randomMeal);

    loadRandomMeal(randomMeal, true);
}

function getMealById(id) {
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
}


function getMealByName(name) {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + name);
}


function loadRandomMeal(mealData, random = false) {
    const meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML = ` 
    <div>
        Wanna Try this out?
    </div>

    <div class="meal-header">
        ${random ? `<span class="random">
        Random-recipe
     </span>` : ''}

        <img src="${mealData.strMealThumb}" alt=""/>

    </div>
    <div class="meal-body">
        <h4>${mealData.strMeal}</h4>
        <button class="fav-button">
            <i class="fas fa-heart"></i>
        </button>
    </div>
</div>`

    random_mealElement.appendChild(meal);
}