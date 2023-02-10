const API_KEY = '04c35731a5ee918f014970082a0088b1';
const API_URL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";


const mainContainer = document.querySelector('main'); 
const form = document.querySelector('form'); 
const search = document.querySelector('#search'); 

//Get Movies
getMovies(API_URL);

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();

    showMovies(data.results);
    console.log(showMovies(data.results));
}

function getClassByRate(vote){
    if(vote > 8){
        return 'green';
    }else if(vote <= 8 && vote > 5){
        return 'orange';
    }else{
        return 'red';
    }
}

function showMovies(movies){
    //clear main first
    mainContainer.innerHTML = "";
    movies.forEach(item => {
        const {poster_path, title, vote_average, overview} = item;


        const movieElement = document.createElement('div');
        movieElement.classList.add("movie");
        movieElement.innerHTML = `<img src="${IMAGE_PATH + poster_path}" alt="No Image Found!!!"/>
        <div class="movie-info">
            <h3>${title}</h3>
            <span class=${getClassByRate(vote_average)}>${vote_average}</span>
        </div>

        <div class="overview">
            ${overview} 
        </div> 
        `

        mainContainer.appendChild(movieElement);
    });

    return data;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const searchTerm = search.value;

    if(searchTerm){
        getMovies(SEARCH_API + searchTerm);
    }


})



