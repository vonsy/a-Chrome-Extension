var s = document.createElement('script');
s.src = chrome.extension.getURL('injected.js');
s.onload = function() {
    s.parentNode.removeChild(s);
};

var s1 = document.createElement('script');
s1.src = chrome.extension.getURL('jquery-3.1.1.min.js');
s1.onload = function() {
    s1.parentNode.removeChild(s1);
};

(document.head||document.documentElement).appendChild(s1);
(document.head||document.documentElement).appendChild(s);