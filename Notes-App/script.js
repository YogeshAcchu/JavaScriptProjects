const editButton = document.querySelector('.edit');
const deleteButton = document.querySelector('.delete');

const notesElement = document.querySelector('.notes-container');
const mainElement = notesElement.querySelector('.main-container');
const textArea = notesElement.querySelector("textarea");


editButton.addEventListener('click', () => {
    mainElement.classList.toggle('hidden');
    textArea.classList.toggle('hidden'); 
    console.log('clicked');
});

textArea.addEventListener("input", (event) => {
    const { value } = event.target;
    mainElement.innerHTML = marked.parse(value);
});


