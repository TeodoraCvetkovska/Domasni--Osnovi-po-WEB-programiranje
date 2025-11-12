var user = localStorage.getItem("username");
var hasSigned = localStorage.getItem("hasSignedUp");

function start() {
   if(user && hasSigned)
   {
    var text = document.getElementById("welcome");
    var newText = document.createElement("span");
    newText.textContent = " Welcome " + user +"!";
    text.append(newText);
   }
   else
   {
      window.alert("Sign up or Log in for a better experience!");
   }
   
}



window.addEventListener("load", start, false);