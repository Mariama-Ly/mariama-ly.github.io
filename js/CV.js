const boutton= document.getElementById("téléchargerBtn");
boutton.addEventListener("click",function(event)){
    Event.preventdefault();
    alert("Merci de télécharger mon CV !");
    window.location.href = boutton.href;
}