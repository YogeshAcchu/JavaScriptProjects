//Procedure to create Stop Watch

//text
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");


let intervalId;
let time = 0;

const updateTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time/60) % 60);
    const seconds = Math.floor(time%60);

    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

const resetTime = () => {
    time = 0;
    updateTime();
}

const startTime = () => {
    intervalId = setInterval(() => {
        updateTime();
        console.log(time++);
    }, 0.1);
}

const stopTime = () => {
    clearInterval(intervalId);
}
