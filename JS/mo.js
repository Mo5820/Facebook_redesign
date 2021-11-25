var settingmenue=document.querySelector(".setting-menue");
var btndark=document.querySelector("#dark-btn");
var body2=document.querySelector(".body");
function func(){ 
    settingmenue.classList.toggle("setting-menue-height");
}

function func2(){ 
    btndark.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}