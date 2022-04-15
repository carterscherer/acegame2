

var end = 0 // change this to stop the counter at a higher value
var refresh=1000; // Refresh rate in milli seconds

function display_c(start){
window.start = parseFloat(start);

if(window.start >= end ){
mytime=setTimeout('display_ct()',refresh)
}
else {location.replace('index.html')}
}

function display_ct() {
// Calculate the number of days left
var days=Math.floor(window.start / 86400);

// After deducting the days calculate the number of hours left
var hours = Math.floor((window.start - (days * 86400 ))/3600);

// After days and hours , how many minutes are left 
var minutes = Math.floor((window.start - (days * 86400 ) - (hours *3600 ))/60);

// Finally how many seconds left after removing days, hours and minutes. 
var secs = Math.floor((window.start - (days * 86400 ) - (hours *3600 ) - (minutes*60)));

var x =  + minutes + " : "  + secs;
document.getElementById('ct').innerHTML = x;

window.start= window.start- 1;

tt=display_c(window.start);
}




/* 
const startTiming = 60
let time = startTiming * 60

const count = document.getElementById("countdownTimer")
setInterval(updateTimer, 1000)

function updateTimer() {
    const minutes = Math.floor(time/60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds
    count.innerHTML = `${minutes}:${seconds}`
    time--

    if (time == 0) location.replace('index.html')
}
*/