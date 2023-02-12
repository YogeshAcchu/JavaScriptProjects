const API_URL = 'https://api.github.com/users/';

const searchElement = document.getElementById('search');
const container = document.querySelector('.container');
const form = document.querySelector('form');

getUser('yogesh-2902');

async function getUser(name) {
    const response = await fetch(API_URL + name);
    const data = await response.json();
    // console.log(data);
    getRepos(name);
    createUserCard(data);
}

async function getRepos(username) {
    const response = await fetch(API_URL + username + '/repos');
    const data = await response.json();
    console.log(data);
    addRepostoCard(data);
}

function addRepostoCard(repos) {
    const reposElement = document.querySelector('#repos');
    repos.slice(0, 9).forEach(item => {
        // console.log(item.name);  
        const repoNameElement = document.createElement('a');
        repoNameElement.classList.add('reponameElement');

        repoNameElement.href = item.html_url;
        repoNameElement.target = '_blank';
        repoNameElement.innerText = item.name;

        reposElement.appendChild(repoNameElement);
    })
}

function createUserCard(userData) {

    const { avatar_url, name, login, bio, followers, following, public_repos } = userData;

    const cardHTML = `<div class="card">
        <div class="image-container">
            <img class="avatar" src="${avatar_url}" alt="name">
        </div>

        <div class="user-info">
            <h3>${name}</h3>
            <h4>${login}</h4>
            <span>${bio}</span>

            <ul class="info">
                <li>Followers - ${followers}</li>
                <li>Following - ${following}</li>
                <li>Repos -  ${public_repos}</li>
            </ul>

            <div id="repos"></div>
        </div>

       

    </div>`

    container.innerHTML = cardHTML;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getUser(searchTerm);
        search.value = "";
    }
});
