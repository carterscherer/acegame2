
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

var x = hours + " : "  + minutes + " : "  + secs;
document.getElementById('ct').innerHTML = x;

window.start= window.start- 1;

tt=display_c(window.start);
}

/*
// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }
  
  // Declare variables to use in our functions below
  


  let startTime;
  let elapsedTime = 0;
  let timerInterval;
  
  // Create function to modify innerHTML
  
  function print(txt) {
    document.getElementById("display").innerHTML = txt;
  }
  
  // Create "start", "pause" and "reset" functions
  
  function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
  }
  
  clearInterval(timerInterval);

  //function pause() {
    //clearInterval(timerInterval);
    //showButton("PLAY");
  //}
  
  function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    //showButton("PLAY");
  }
  
  // Create function to display buttons
  
  //function showButton(buttonKey) {
    //const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    //const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    //buttonToShow.style.display = "block";
    //buttonToHide.style.display = "none";
  //}
  // Create event listeners
  
  let playButton = document.getElementById("playButton");
  let pauseButton = document.getElementById("pauseButton");
  let resetButton = document.getElementById("resetButton");
  
  playButton.addEventListener("click", start);
  pauseButton.addEventListener("click", pause);
  resetButton.addEventListener("click", reset);


*/







/*
var h = document.getElementById('hour')
var m = document.getElementById('minute')
var s = document.getElementById('second')

//const count = document.getElementById("countdownTimer")
startTimer();

function timer(){

   
    if(h == 0 && m == 0 && s == 0){
        h.innerHTML = `${h}`;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value ==0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 59;
        h.value--;
    }
   
}

function stopTimer(){
    clearInterval(startTimer);
    location.replace('index.html')
}

*/
/*

function timer(){

   
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value ==0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 59;
        h.value--;
    }
   
}

*/




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






/* function showTimer(){
    var time = "00 : 10 : 00";
    timer_two = document.getElementById("timer_two");
    timer_two.innerHTML = time;

    my_timer = setInterval(function(){
        var hr = 0; var min = 0; var sec = 0;
        var time_up = false;
        t = time.split(":")
        hr = parseInt(t[0]);
        min = parseInt(t[1]);
        sec = parseInt(t[2]);
        if(sec == 0){
            if(min > 0){
                sec = 59;
                min--;
            }
            else if(hr > 0){
                min = 59;
                sec = 59;
                hr--;
            }
            else{
                time_up = true;
            }
        }
        else{
            sec--;
        }
        if(hr < 10)
            hr = "0" + hr;
        if(min < 10)
            min = "0" + min;
        if(sec < 10)
            sec = "0" + sec;
        time = hr + ":" + min + ":" + sec;
        if(time_up)
            time="time up"
        timer_two = document.getElementById("timer_two")
        timer_two.innerHTML = time;
        if (time_up)
            clearInterval(my_timer);

    },1000)
}
*/