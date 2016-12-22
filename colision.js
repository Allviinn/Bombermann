function colision(nbEnnemie,idHero,idEnnemie) { 

    if (nbEnnemie <= 1 ) {
        var enemmie = document.getElementById(idEnnemie);
        var hero = document.getElementById(idHero);
        var heroTop = parseFloat(hero.style.top.replace("px",""));
        var heroLeft = parseFloat(hero.style.left.replace("px",""));
        var heroWhidth = parseFloat(hero.style.width.replace("px",""));
        var heroHeight = parseFloat(hero.style.height.replace("px",""));
        var ennemieTop = parseFloat(enemmie.style.top.replace("px",""));
        var enemmieLeft = parseFloat(enemmie.style.left.replace("px",""));
        var enemmieWhidth = parseFloat(enemmie.style.width.replace("px",""));
        var enemmieHeight = parseFloat(enemmie.style.height.replace("px",""));


        if (heroLeft < enemmieLeft + enemmieWhidth &&
           heroLeft + heroWhidth > enemmieLeft &&
           heroTop <ennemieTop + enemmieHeight &&
          heroHeight+heroTop>ennemieTop)  {

            
            document.getElementById("div-parent").removeChild(hero);
            window.location.href="gameover.html";

        }
        else
        {
        console.log("gagner");
        }
    }
    else
    {

        var enemmie = document.getElementsByClassName(idEnnemie);
        for (var i=0; i<enemmie.length; i++) {
          
            var hero = document.getElementById(idHero);
            var heroTop = parseFloat(hero.style.top.replace("px",""));
            var heroLeft = parseFloat(hero.style.left.replace("px",""));
            var heroWhidth = parseFloat(hero.style.width.replace("px",""));
            var heroHeight = parseFloat(hero.style.height.replace("px",""));
            var ennemieTop = parseFloat(enemmie[i].style.top.replace("px",""));
            var enemmieLeft = parseFloat(enemmie[i].style.left.replace("px",""));
            var enemmieWhidth = parseFloat(enemmie[i].style.width.replace("px",""));
            var enemmieHeight = parseFloat(enemmie[i].style.height.replace("px",""));
            
            if (heroLeft < enemmieLeft + enemmieWhidth &&
                heroLeft + heroWhidth > enemmieLeft &&
                heroTop <ennemieTop + enemmieHeight &&
                heroHeight+heroTop>ennemieTop)  {
                console.log(enemmieHeight,enemmieWhidth,enemmieLeft,ennemieTop);

                
                window.location.href="gameover.html";
            }
             else
            {
            
            }
    }
    }
}


function colisionBoum(idHero,idEnnemie){




        var enemmie = document.getElementsByClassName(idEnnemie);
        for (var i=0; i<enemmie.length; i++) {
          
            var hero = document.getElementById(idHero);
            var heroTop = parseFloat(hero.style.top.replace("px",""));
            var heroLeft = parseFloat(hero.style.left.replace("px",""));
            var heroWhidth = parseFloat(hero.style.width.replace("px",""));
            var heroHeight = parseFloat(hero.style.height.replace("px",""));
            var ennemieTop = parseFloat(enemmie[i].style.top.replace("px",""));
            var enemmieLeft = parseFloat(enemmie[i].style.left.replace("px",""));
            var enemmieWhidth = parseFloat(enemmie[i].style.width.replace("px",""));
            var enemmieHeight = parseFloat(enemmie[i].style.height.replace("px",""));


            if (heroLeft < enemmieLeft + enemmieWhidth &&
                heroLeft + heroWhidth > enemmieLeft &&
                heroTop <ennemieTop + enemmieHeight &&
                heroHeight+heroTop>ennemieTop)  {
               
                document.getElementById("div-parent").removeChild(enemmie[i]);
             //setTimeout(function(){ 
             //var sonHeadShot = document.getElementById("headshot");
             //sonHeadShot.play();
             //; }, 1500);
            }
             else
            {
            
            }
}
}

function colisionMur(idHero,classEnnemiei) { 


        var enemmie = classEnnemiei;
        var hero = document.getElementById(idHero);
        var heroTop = parseFloat(hero.style.top.replace("px",""));
        var heroLeft = parseFloat(hero.style.left.replace("px",""));
        var heroWhidth = parseFloat(hero.style.width.replace("px",""));
        var heroHeight = parseFloat(hero.style.height.replace("px",""));
        var ennemieTop = parseFloat(enemmie.style.top.replace("px",""));
        var enemmieLeft = parseFloat(enemmie.style.left.replace("px",""));
        var enemmieWhidth = parseFloat(enemmie.style.width.replace("px",""));
        var enemmieHeight = parseFloat(enemmie.style.height.replace("px",""));


        if (heroLeft < enemmieLeft + enemmieWhidth &&
           heroLeft + heroWhidth > enemmieLeft &&
           heroTop <ennemieTop + enemmieHeight &&
          heroHeight+heroTop>ennemieTop)  
        {            
            return true;
            console.log("salut");
        }
        else
        {
            return false;
            console.log("hello");
        }
    }
