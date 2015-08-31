var UA = null;
var description = null;

handler = function (details) {
    
    if (UA == null) {
        return;
    }

    for (var i = 0, l = details.requestHeaders.length; i < l; ++i) {
        if (details.requestHeaders[i].name === 'User-Agent') {
            details.requestHeaders[i].value = UA;
            break;
        }
    }

    return { requestHeaders: details.requestHeaders };
};

if (UA != null) {
    document.getElementById('ua').value = UA;
}

setUA('Googlebot/2.1 (+http://www.googlebot.com/bot.html)', 'Googlebot (Google\'s spider)');
chrome.browserAction.setIcon({ path: ('icon-active.png') });    

chrome.webRequest.onBeforeSendHeaders.addListener(handler, {urls: ["*://*.haaretz.com/*","*://*.haaretz.co.il/*"]},  ["blocking", "requestHeaders"]);
chrome.browserAction.onClicked.addListener(
    function () {
        if(UA == null) {
            setUA('Googlebot/2.1 (+http://www.googlebot.com/bot.html)', 'Googlebot (Google\'s spider)');
            return false;
        } else {
            clearUA();
            return false;
        }
    });

function setUA(ua, desc) {
    UA = ua;
    description = desc;
    chrome.browserAction.setIcon({ path: (ua == null ? 'icon.png' : 'icon-active.png') });    
}

function clearUA() {
    UA = null;
    description = null;
    chrome.browserAction.setIcon({ path: 'icon.png' }, function () { setTimeout('window.close()', 100); });    
}
