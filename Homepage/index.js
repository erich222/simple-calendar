
//Creates main calendar body (currently only works with an even number of elapsed hours and does not differentiate between AM and PM)
//startTime inclusive endTime exclusive
function generateCalendar(startTime, endTime) {
    const numRows = Math.abs(((endTime-startTime)/2));
    const firstHalf = document.querySelector('.firstHalf');
    const secondHalf = document.querySelector('.secondHalf');
    for(i = startTime+1; i < startTime + numRows + 1; i++) {
        firstHalf.appendChild(generateCalendarTimeBox(i));
    }
    
    for(i = startTime+numRows+1; i < endTime+1; i++) {
        secondHalf.appendChild(generateCalendarTimeBox(i));
    }  
}

//Generates timeboxes for main calendar
function generateCalendarTimeBox(time){
    const timebox = document.createElement('div');
    timebox.classList.add("timebox");
    timebox.textContent = `${time} PM`;
    return timebox;

}

generateCalendar(5,9);
