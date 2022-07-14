


/*

chrome.storage.sync.set({key: value}, function() {
    console.log('Value is set to ' + value);
  });
  
  chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });

*/

/*
// Initialize button with user's preferred color
let changeColor = document.getElementById("thejammincat");

chrome.storage.sync.get("time", ({ time }) => {

  changeColor.style.backgroundColor = time;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: clicked,
    });
  });
  

  function clicked(){
    
  }

  // The body of this function will be executed as a content script inside the
  // current page
  function Time_get() {
    chrome.storage.sync.get("time", ({ time }) => {
      // document.body.style.backgroundColor = color;
      // get val from background.js
    });
  }
  function Time_set() {
    chrome.storage.sync.set("time", ({ time }) => {
        // add to val in background.js
      });
  }

  */