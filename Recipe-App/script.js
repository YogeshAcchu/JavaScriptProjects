
const random_mealElement = document.getElementById('random-meal');
const favorite_mealElement = document.getElementById('fav-meals');



getRandomMeal();
fetchFavoriteMeals();

async function getRandomMeal() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const responseData = await response.json();
    const randomMeal = responseData.meals[0];

    console.log(randomMeal);

    loadRandomMeal(randomMeal, true);
}

async function getMealById(id) {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    const responseData = await response.json();
    const meal = responseData.meals[0];

    return meal;
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

    //add to favorites
    const button = meal.querySelector(".meal-body .fav-button");

    button.addEventListener('click', () => {
        if (button.classList.contains('active')) {
            removeMealfromLocalStorage(mealData.idMeal);
            button.classList.remove('active');
        } else {
            addMealstoLocalStorage(mealData.idMeal);
            button.classList.add('active');
        }
        // console.log("Clicked");
        /***********************VERY IMPORTANT ********************************* */
        //Clear the container or else we get duplicate items again
        favorite_mealElement.innerHTML = "";
        fetchFavoriteMeals();

    });

    // meal.querySelector(".meal-body .fav-button").addEventListener('click', (event) => { 
    //         event.classList.toggle('active');
    //         console.log("Clicked");
    //      });

    random_mealElement.appendChild(meal);
}


function addMealstoLocalStorage(newMealID) {
    const mealIDs = getMealsFromLocalStorage();
    localStorage.setItem('mealIDs', JSON.stringify([...mealIDs, newMealID]));
}

function removeMealfromLocalStorage(mealID) {
    const mealIDs = getMealsFromLocalStorage();
    localStorage.setItem('mealIDs', JSON.stringify(mealIDs.filter((item) => item != mealID)));
    ;
}

function getMealsFromLocalStorage() {
    const mealIDs = JSON.parse(localStorage.getItem('mealIDs'));
    // console.log(mealIDs);
    return mealIDs === null ? [] : mealIDs;
}

async function fetchFavoriteMeals() {
    const mealIDs = getMealsFromLocalStorage();

    for (let i = 0; i < mealIDs.length; i++) {
        const mealID = mealIDs[i];
        const favoriteMeal = await getMealById(mealID);
        addMealToFavorite(favoriteMeal);

        // console.log(favoriteMeal);
    }

}


function addMealToFavorite(mealData) {
    const favoriteMeal = document.createElement('li');

    favoriteMeal.innerHTML = ` 
    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />
    <span>${mealData.strMeal}</span>
   `
    favorite_mealElement.appendChild(favoriteMeal);

    console.log(favoriteMeal);


}

