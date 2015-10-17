getActivePageContent();

function getActivePageContent(){
  return document.body.textContent || document.body.innerText;
};

// chrome.runtime.sendMessage({ text: getActivePageContent() }, function(response){
//   alert(response.farewell);
// });