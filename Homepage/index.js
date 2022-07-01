
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

document.querySelector('.button.addEvent').addEventListener('click', toggleAddEventScreen)
document.querySelector('.button2.add').addEventListener('click', toggleAddEventScreen)
function toggleAddEventScreen(e) {
    const screen = document.querySelector('.popup.addEvent');
    console.log(e.target)
    console.log(e.target.classList.contains('.add'))
   if( e.target.classList.contains('add')) {
        screen.style.display = 'none';
    }
    else {
        screen.style.display = 'flex'
    }
}
generateCalendar(5,9);

let isCalendarView = true
document.querySelector('.button.toggleView').addEventListener('click', toggleView)
function toggleView(e){
    if (isCalendarView)
    {
        isCalendarView = false
        document.querySelector('.button.toggleView').textContent = "List View"
        // to do list crap
    }
    else{
        isCalendarView = true
        document.querySelector('.button.toggleView').textContent = "Calendar View"
        // regular all time slots crap
    }
}