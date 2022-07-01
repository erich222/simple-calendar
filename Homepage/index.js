
//Creates main calendar body (currently only works with an even number of elapsed hours)
//startTime inclusive endTime exclusive
function generateCalendar(startHour,start_ampm, endHour, end_ampm) {
    const firstHalf = document.querySelector('.firstHalf');
    const secondHalf = document.querySelector('.secondHalf');   
    const hours = getElapsedHours(startHour,start_ampm, endHour, end_ampm);
    console.log(hours);
        for(i = 0; i < Math.floor(hours.length/2)+1; i++) {firstHalf.appendChild(generateCalendarTimeBox(hours[i].hour, hours[i].ampm ))}
        for(i = Math.floor(hours.length/2)+1; i < hours.length; i++) {secondHalf.appendChild(generateCalendarTimeBox(hours[i].hour, hours[i].ampm ))}
        if(firstHalf.childNodes.length != secondHalf.childNodes.length) {
            let time = createTime(endHour, end_ampm);
            secondHalf.appendChild(generateCalendarTimeBox(time.hour, time.ampm))
        }


}
const createTime = (hour, ampm) => {return {hour, ampm};}
function getElapsedHours(startHour,start_ampm, endHour, end_ampm) {
    hours = [];
    if(start_ampm == end_ampm) {
        for(i = startHour; i < endHour; i++) {
            hours.push(time = createTime(i, start_ampm));
        }
    }
    else if(start_ampm != end_ampm) {
        for(i = startHour; i <12; i++) {
            hours.push(time = createTime(i, start_ampm));
        }
        hours.push(time = createTime(12, "PM"));
        for(i = 1; i <endHour; i++) {
            hours.push(time = createTime(i, end_ampm));
        }

    }
    return hours;
}
    
    




    

//Generates timeboxes for main calendar
function generateCalendarTimeBox(time, ampm){
    const timebox = document.createElement('div');
    timebox.classList.add("timebox");
    timebox.textContent = `${time} ${ampm}`;
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
generateCalendar(5, "AM",8, "PM");

