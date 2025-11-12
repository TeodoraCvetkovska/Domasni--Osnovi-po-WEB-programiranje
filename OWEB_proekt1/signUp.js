function start()
{
    document.getElementById("submitButton").addEventListener("click", saveValues, false);
}

function saveValues(event) {
    var name = document.getElementById("username").value;
    localStorage.setItem("username", name);
    localStorage.setItem("hasSignedUp", "true");
}

window.addEventListener("load", start, false)