
//Creates main calendar body (currently only works with an even number of elapsed hours and does not differentiate between AM and PM)
function generateCalendar(startTime, endTime) {
    const numRows = Math.abs(((endTime-startTime)/2));
    const firstHalf = document.querySelector('.firstHalf');
    firstHalf.appendChild(generateCalendarTimeBox(1));
    firstHalf.appendChild(generateCalendarTimeBox(2));    
}

function generateCalendarTimeBox(time){
    const timebox = document.createElement('div');
    timebox.classList.add("timebox");
    timebox.textContent = time;
    return timebox;

}

generateCalendar(4,8);
