const currentDate = document.querySelector(".current-date");
const dates = document.querySelector(".dates");
const previousNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

// console.log(date, currentMonth , currentYear);

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const renderCalender = () => {
        const firstDateOfMonth = new Date(currentYear, currentMonth, 1).getDay(); //getting first day of month
        const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); //getting last date of month
        const lastDayOfMonth = new Date(currentYear, lastDateOfMonth).getDay(); //getting last day of month
        const lastDateOfPreviousMonth = new Date(currentYear, currentMonth, 0).getDate(); //getting last day of month
        let listItem = "";
        // console.log(lastDateOfMonth);

        for(let i =firstDateOfMonth; i>0; i--){
            listItem += `<li class"inactive">${lastDateOfPreviousMonth - i + 1 }</li>`
        }

        for(let i =1; i<=lastDateOfMonth; i++){
            let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "" ;
            listItem += `<li class=${isToday}>${i}</li>`
        } 

        for(let i =lastDayOfMonth; i<6; i++){
            listItem += `<li class"inactive">${i - lastDayOfMonth + 1 }</li>`
        }


        currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
        dates.innerHTML = listItem;
    }

    renderCalender();

    //adding click events to both buttons
    previousNextIcon.forEach(icon => {
        icon.addEventListener("click", () => {
            // console.log(icon);
        
            currentMonth = icon.id === "prev" ? currentMonth-1 : currentMonth+1;
            if(currentMonth < 0 || currentMonth > 11) {
                date = new Date(currentYear, currentMonth);
                currentYear = date.getFullYear();
                currentMonth = date.getMonth();
            }else{
                date = new Date();
            }
            renderCalender();
        })
    });
