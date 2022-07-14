// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

/*
chrome.storage.sync.get('time', function(get_time){
  if (get_time.time) {
      document.getElementById("display").innerHTML = get_time.time;
  }
  });
  
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  
  let displaySeconds = 0;
  let displayMinutes = 0;
  let displayHours = 0;
  
  function stopWatch() {
  
  seconds++;
  
  if (seconds / 60 === 1) {
      seconds = 0;
      minutes++;
  
      if (minutes / 60 === 1) {
          minutes = 0;
          hours++;
      }
  }
  
  if (seconds < 10) {
      displaySeconds = "0" + seconds.toString();
  } else {
      displaySeconds = seconds;
  }
  
  if (minutes < 10) {
      displayMinutes = "0" + minutes.toString();
  } else {
      displayMinutes = minutes;
  }
  
  if (hours < 10) {
      displayHours = "0" + hours.toString();
  } else {
      displayHours = hours;
  }
  
  document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
  var time = displayHours + ":" + displayMinutes + ":" + displaySeconds;
  chrome.storage.sync.set({'time': time});
  
  }
  
  window.setInterval(stopWatch, 1000);
  */