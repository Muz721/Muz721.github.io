init();
function init(){
    var icon = document.getElementById("main_icon");
    var brand = new XMLHttpRequest();
    brand.onreadystatechange = function(){
        myObj = JSON.parse(this.responseText);
        icon.href = myObj.url;
        icon.innerText = myObj.name;
        document.title = myObj.name;
    }
    brand.open("GET","json.json",true);
    brand.send();
}