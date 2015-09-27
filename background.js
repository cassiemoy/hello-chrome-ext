chrome.runtime.onMessage.addListener(function(msg, sender) {
  if (msg.from === 'content') {
        /* Enable the page-action for the requesting tab */
        chrome.pageAction.show(sender.tab.id);
    }
});