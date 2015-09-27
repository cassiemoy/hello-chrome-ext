// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Get content from the current page so that we can look for Twitter handles.

function getDOMContent() {
  var str = "@twitterhandle Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. @cassiemoy Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return str
}

function findUsernames() {
  var content = getDOMContent();
  var possibleUsernames = ["@cassiemoy", "@twitterhandle"]
  // parsing content to find possible usernames
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
