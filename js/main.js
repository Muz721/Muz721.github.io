init();
function init() {
    var prime_search =document.getElementById("prime_searsh");
    var prime_searsh_form = document.getElementById("prime_searsh_form");
    var prime_cancel = document.getElementById("prime_cancel");
    prime_search.onclick = function() {
        prime_searsh_form.style.display="block";
        prime_cancel.style.display="block";
    }
    prime_cancel.onclick = function(){
        prime_searsh_form.style.display="none";
        prime_cancel.style.display="none";
    }
}