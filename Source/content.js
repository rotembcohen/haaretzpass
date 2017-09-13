
!function checkRemovePopup(){
    var el = document.querySelector('.paywall-pop-big');
    el && el.parentNode.removeChild(el);
    
    setTimeout(checkRemovePopup, 2000);
}();