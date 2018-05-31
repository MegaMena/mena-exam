
function sendBesked() {
    var besked = document.getElementById("besked");
    besked.className = "show";
    setTimeout(function(){ besked.className = besked.className.replace("show", ""); }, 3000);
}
