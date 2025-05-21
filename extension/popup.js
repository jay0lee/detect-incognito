window.onload = function() {
    chrome.runtime.getContexts({}, function(contexts) {
        console.log(contexts);
    }
};
