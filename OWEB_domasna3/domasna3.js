var images = new Array(12);
var firstCard=null;
var secondCard=null;
var tries=0;
var noClicks=false;

function start() {
    window.alert("Click on the Shuffle Cards button to begin with the memory game!");
    var button = document.getElementById("startbutton");
    button.addEventListener("click", shuffleCards, false);
    for(var i=0; i<images.length; ++i)
    {
        images[i] = document.getElementById("img"+ i);
        images[i].addEventListener("click", openCard, false);
    }
}

function shuffleCards()
{
    var arr = new Array(12);
   for(var i=1; i<=6; ++i)
    {
        for(var j=0; j<2; ++j)
        {
            var index;
            do{
                index = Math.floor(Math.random()*12);
            }while(arr[index] != undefined);
            arr[index]=i;
        }
    }
    setClass(arr);
}

function setClass(arrRandom) {
    for(var i=0; i<arrRandom.length; ++i)
    {
        images[i].setAttribute("class", "design" + arrRandom[i]);
    }
}

function openCard(event)
{
    var clicked = event.target;

    if(noClicks) return;

    if(clicked==firstCard || clicked.getAttribute("found")) return; //da ne moze dva pati ista slika da se klikne

    clicked.setAttribute("src", clicked.getAttribute("class") + ".png");

    if(firstCard == null)
    {
        firstCard=clicked;
    }    
    else
    {
        secondCard=clicked;
        tries=tries+1;
        if(firstCard.getAttribute("class") != secondCard.getAttribute("class"))
        {
            noClicks=true;
            setTimeout(() => setToBlank(firstCard, secondCard), 1000); // 1000ms = 1s
        }
        else
        {
            firstCard.setAttribute("found", true);  //kreiram svoj atribut found i im go dodeluvam na sekoj par otkrieni karti
            secondCard.setAttribute("found", true);


            firstCard=null;
            secondCard=null;
             if(allOpened())
            {
                setTimeout(() => { window.alert("Congratulations! You found all of the cards in " + tries + " tries.\nReload to play again!");}, 50); 
                //50ms sekundi ke docni za da moze da se vidi kako se prevrtuva poslednata karta, pred da se pojavi poraka na ekranot
            }
        }

    }
}

function setToBlank(card1, card2)
{
    card1.setAttribute("src", "blankCard.png");
    card2.setAttribute("src", "blankCard.png");
    firstCard = null;
    secondCard = null;
    noClicks=false;
}

function allOpened()
{
    for(var i=0; i<images.length; ++i)
    {
        if(!images[i].getAttribute("found"))
        {
          return false;
        }
    }
    return true;
}

window.addEventListener("load", start, false);
