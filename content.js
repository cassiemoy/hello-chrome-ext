console.log("running content.js");

// function getActivePageContent(){
//   return document.body.textContent || document.body.innerText;
// };

// chrome.extension.sendRequest({greeting: "hi theere @anthony. hit the floor"});

console.log(chrome.tabs);

chrome.tabs.sendMessage({greeting: "hi theere @anthony. hit the floor"}, function(response){
  console.log(response.farewell);
});

// chrome.runtime.sendMessage({ greeting: "hi theere @anthony. hit the floor"}, function(response){
//   console.log(response.farewell);
// });