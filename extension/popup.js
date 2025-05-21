window.onload = function() {
    chrome.runtime.getContexts({}, function(contexts) {
        var mode;
        if ( contexts[0].incognito ) {
            mode = "Incognito";
        } else {
            mode = "Regular";
        }
        document.body.innerHTML = mode;
    });
};
