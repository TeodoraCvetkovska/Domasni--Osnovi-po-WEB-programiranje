var user = localStorage.getItem("username");
var hasSigned = localStorage.getItem("hasSignedUp");


function start()
{
   if(user && hasSigned)
   {
    for(var i=0; i<6; ++i)
    {
        document.getElementById("likebutton"+i).addEventListener("click", addLike, false);
        document.getElementById("dislikebutton"+i).addEventListener("click", addDislike, false);
        document.getElementById("postbutton"+i).addEventListener("click", postComment, false);

        document.getElementById("likebutton"+i).setAttribute("liked", "false");
        document.getElementById("dislikebutton"+i).setAttribute("disliked", "false");
    }
   }
   else
   {
    window.alert("Please sign up / log in in order to comment or like/dislike on photos!");
   }
}

function addLike(event)
{
    var likeButton = event.currentTarget;
    var like = likeButton.querySelector("span");
    let likeValue = parseInt(like.textContent);

    var likeid = likeButton.getAttribute("id");
    var dislikeid = "dis" + likeid;
    var sameDislike = document.getElementById(dislikeid);

    if(sameDislike.getAttribute("disliked") == "false")    //ako e pritisnato vekje dislike ne moze i vo isto vreme i like da stisnes!
    {
        if(likeButton.getAttribute("liked") == "true")
        {
            likeValue--;
            likeButton.setAttribute("liked", "false");
        }
        else
        {
            likeValue++;
            likeButton.setAttribute("liked", "true");
        }

            like.textContent = likeValue;
    
    }

}

function addDislike(event) {
    var dislikeButton = event.currentTarget;
    var dislike = dislikeButton.querySelector("span");
    let dislikeValue = parseInt(dislike.textContent);

    var dislikeid = dislikeButton.getAttribute("id");
    var podeli = dislikeid.split('s');
    var likeid = podeli[1];
    var sameLike = document.getElementById(likeid);

    if(sameLike.getAttribute("liked") == "false")   //ako ne e pritisnato like moze da stisnes dislike
    {
        if(dislikeButton.getAttribute("disliked") == "true")
        {
            dislikeValue--;
            dislikeButton.setAttribute("disliked", "false");
        }
        else
        {
            dislikeValue++;
            dislikeButton.setAttribute("disliked", "true");
        }

        dislike.textContent = dislikeValue;
    }

    
}

function postComment(event) {
    var postbutton = event.currentTarget;
    var parentdiv = postbutton.closest(".form-group");  //go prebaruva dom drvoto od elementot nagore, i stom go najde prviot predok prestanuva
    var textarea = parentdiv.querySelector("textarea"); //go naogja prviot element textarea sto e vo div-ot so class form-group 
    var text = textarea.value.trim();                   //ja cuvam vrednosta od toj element

    if (text == "") {
    alert("Please write a comment and then click Post!");
    return;
    }

    text = user + ": " + text;

    var newNode = document.createElement("p");
    newNode.appendChild(document.createTextNode(text));
    newNode.setAttribute("class", "newComment");
    parentdiv.parentNode.insertBefore(newNode, parentdiv);

    textarea.value = ""; //go brishe toa sto e vo komentarot
}

window.addEventListener("load", start,false);