

let checkBtn = document.getElementById('checkBtn');

 checkBtn.onclick = function(element) {
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         chrome.tabs.executeScript(
             tabs[0].id,
             {code: `
	         window.open('www.google.com')
	          	`});

     });
 }
