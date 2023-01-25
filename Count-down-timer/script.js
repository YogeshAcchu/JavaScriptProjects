
/**
 * Explain 
 * We need a cureent data and new year data and from that we need to subtract the time and divide it into days, minutes and hours and seconds
 * 
 * seconds to minutes = minutes / 60
 * seconds to hours = seconds / 3600
 * seconds to day = seconds / 3600 * 24
 * 
 */

const newYear = "1 Jan 2024";

const daysElement = document.querySelector('#days')
const hoursElementElement = document.querySelector('#hours')
const minutesElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')


const countdown = () => {
    const currentTime = new Date();
    const newYearTime = new Date(newYear);
    const diff = newYearTime - currentTime;

    const totalseconds = (diff / 1000);

    const days = Math.floor(totalseconds / (3600 * 24));
    const hours = Math.floor(totalseconds / (3600)) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds % 60);

    daysElement.innerHTML = formatTime(days);
    hoursElementElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);


    // console.log(`Days is ${days}, Hours is ${hours}, minutes is ${minutes} , seconds is ${seconds}`);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//Initial Call
countdown();


setInterval(countdown, 1000);

