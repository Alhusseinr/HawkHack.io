window.onload = function(){ 

    function showMailingPopUp() {
        window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us19.list-manage.com","uuid":"f25898edc0e8bf966dc8278c9","lid":"dd503b0557","uniqueMethods":true}) });
    document.cookie = "MCPopupClosed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "MCPopupSubscribed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            };
    document.getElementById("popup1").onclick = function() {showMailingPopUp()};
    document.getElementById("popup2").onclick = function() {showMailingPopUp()};  
    };
