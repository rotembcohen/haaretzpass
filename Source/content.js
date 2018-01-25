
!function checkRemovePopup(){
    var el = document.querySelector('[class^="paywall-pop"]');
    el && el.parentNode.removeChild(el);
    
    setTimeout(checkRemovePopup, 1000);
}();z