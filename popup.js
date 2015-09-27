// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Get content from the current page so that we can look for Twitter handles.

// findUsernames();

function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}


function getDOMContent() {
  console.log("running getDOMContent");

  var str = "@twitterhandle Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. @cassiemoy Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  console.log("trying to listen");
  console.log(chrome.runtime);


  chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("are you listening?");
    if(request.greeting == "hi theere @anthony. hit the floor"){
        console.log("request: "+request.greeting);
    }
  });

  // chrome.runtime.onMessage.addListener(
  //   function(request, sender, sendResponse){
  //     console.log(sender.tab ?
  //       "from a content script:" + sender.tab.url :
  //       "from the extension" );
  //     if (request.greeting == "hi theere @anthony. hit the floor"){
  //       sendResponse({farewell: "goodbye"});
  //       str = "@notworking"
  //     }
  //   }
  // );


  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tabs = tabs[0];

  });

  return str
}

function findUsernames() {
  var content = getDOMContent();
  var possibleUsernames = []
  
  var contentArr = content.split(" ")
  
  for (var i = 0; i < contentArr.length; i++) {
    if (contentArr[i][0] == "@") {
      possibleUsernames.push(contentArr[i]);
    }
  }

  console.log(possibleUsernames);
  return possibleUsernames;
}

document.addEventListener('DOMContentLoaded', function() {
  var possibleUsernames = findUsernames();
  var results = "";

  for (var i = 0; i < possibleUsernames.length; i++) {
    results +='<li>' + possibleUsernames[i] + '</li>';
  }

  document.getElementById('possible-usernames').innerHTML += results;
});
