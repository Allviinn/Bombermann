var parent = document.getElementById("div-parent");
var mouvement = 0;

 function init() {
    //Création du parent
    parent.style.position="relative";
    parent.style.width=500+"px";
    parent.style.height=500+"px";
    parent.style.marginLeft="auto";
    parent.style.marginRight="auto";
    parent.style.backgroundColor="rgba(0,50,0, 0.5)";
    ajoutObjet(50,0,0,"div-enfant","url('images/yoshi_sprite/bas/4808.png')");
    plusieurOjet(4,50,50,50,"mechant","lesMechant","url('images/nTBKA7GTA.gif')");
    ajoutObjetBoum(50,450,200,"mure","lesDestructibles","url('images/murdestructible_03.gif')");
    ajoutObjetBoum(50,150,150,"mure","lesDestructibles","url('images/murdestructible_03.gif')");
    ajoutObjetBoum(50,350,100,"mure","lesDestructibles","url('images/murdestructible_03.gif')");
    ajoutObjetBoum(50,100,350,"mure","lesDestructibles","url('images/murdestructible_03.gif')");
    ajoutObjetBoum(50,350,350,"mure","lesDestructibles","url('images/murdestructible_03.gif')");
    ajoutObjetBoum(50,50,100,"mure","lesDestructibles","url('images/murdestructible_03.gif')");
    ajoutObjetBoum(50,200,150,"mure","lesMure","url('images/murpasdestructible.png')");
    ajoutObjetBoum(50,450,150,"mure","lesMure","url('images/murpasdestructible.png')");
    ajoutObjetBoum(50,50,450,"mure","lesMure","url('images/murpasdestructible.png')");
    ajoutObjetBoum(50,250,400,"mure","lesMure","url('images/murpasdestructible.png')");
}

window.addEventListener("keydown", function (event) {

    if (event.defaultPrevented) {
      return;
    }
    deplacement(event);

    event.preventDefault();

}, true); 

function deplacement(event){
    //donnée enfant
    var enfant = document.getElementById("div-enfant");
    var lesMure = document.getElementsByClassName("lesDestructibles");
    var lesMure2 = document.getElementsByClassName("lesMure")
    var topEnfant = parseFloat(enfant.style.top.replace("px",""));  
    var leftEnfant = parseFloat(enfant.style.left.replace("px",""));    
    var heightEnfant = parseFloat(enfant.style.height.replace("px",""));    
    var widthEnfant = parseFloat(enfant.style.width.replace("px", "")); 

    //donnée parent
    var widthParent = parseFloat(parent.style.width.replace("px",""));
    var heightParent = parseFloat(parent.style.height.replace("px",""));
    
    //chercher le code de la touche
    var touche = event.keyCode;
    if (touche === 39) {
        enfant.style.background = "url('images/yoshi_sprite/droite/eqg.png')";
        enfant.style.backgroundRepeat = "no-repeat";
        enfant.style.backgroundPosition = "center";
         if (leftEnfant === 450) {
            enfant.style.left = 450+"px";
         }
        else
        {

            enfant.style.left = leftEnfant + 50 + "px";
            for(var i=0; i<lesMure.length; i++){
    
                         if(colisionMur("div-enfant",lesMure[i]) === true)
                         {
                           enfant.style.left = leftEnfant + "px";
                         }
                         else
                         { 
                           colision(2,"div-enfant","lesMechant");
                         }
                     }
            for (var j=0; j<lesMure2.length;j++){
                            if (colisionMur("div-enfant",lesMure2[j]) === true) 
                            {
                                enfant.style.left = leftEnfant + "px";
                            }
                            else
                            {
                                colision(2,"div-enfant","lesMechant");
                            }
                           }
            
        }
    }
    
    if (touche === 37) {
        enfant.style.background = "url('images/yoshi_sprite/gauche/esthesh.png')";
        enfant.style.backgroundRepeat = "no-repeat";
        enfant.style.backgroundPosition = "center";
        if (leftEnfant === 0) {
        enfant.style.left = leftEnfant +"px";
        }
    
    else
    {
        enfant.style.left = leftEnfant - 50+"px" ;
    
                            for(var i=0; i<lesMure.length; i++){
                                if(colisionMur("div-enfant",lesMure[i]) === true)
                                {
                                    enfant.style.left = leftEnfant + "px";
                                }
                                else
                                { 
                                   colision(2,"div-enfant","lesMechant");
                                        }

                            }

                                for (var j=0; j<lesMure2.length;j++){
                                    if (colisionMur("div-enfant",lesMure2[j]) === true) 
                                    {
                                        enfant.style.left = leftEnfant + "px";
                                    }
                                    else
                                    {
                                        colision(2,"div-enfant","lesMechant");
                                    }
                                   }
                         }
            }
        
    

    if (touche === 40) {
        enfant.style.background = "url('images/yoshi_sprite/bas/4808.png')";
        enfant.style.backgroundRepeat = "no-repeat";
        enfant.style.backgroundPosition = "center";
            if (topEnfant === 450) {
                enfant.style.top = topEnfant+"px";
                }
            
            else
            {
                enfant.style.top = topEnfant +50+"px" ;
                 for(var i=0; i<lesMure.length; i++){
    
                         if(colisionMur("div-enfant",lesMure[i]) === true)
                         {
                           enfant.style.top = topEnfant + "px";
                         }
                         else
                         { 
                           colision(2,"div-enfant","lesMechant");
                           }
                         }
                         for (var j=0; j<lesMure2.length;j++){
                            if (colisionMur("div-enfant",lesMure2[j]) === true) 
                            {
                               enfant.style.top = topEnfant + "px";
                            }
                            else
                            {
                                colision(2,"div-enfant","lesMechant");
                            }
            }
            }
        }
            if (touche === 38) {
        enfant.style.background = "url('images/yoshi_sprite/haut/haut.png')";
        enfant.style.backgroundRepeat = "no-repeat";
        enfant.style.backgroundPosition = "center";
                if (topEnfant === 0) {
                enfant.style.top = 0+"px";
                }
            
            else
            {
                enfant.style.top = topEnfant -50+"px" ;
                for(var i=0; i<lesMure.length; i++){
                console.log(i);
                console.log(lesMure[i]);
                console.log(colisionMur("div-enfant",lesMure[i]));
                         if(colisionMur("div-enfant",lesMure[i]) === true)
                         {
                           enfant.style.top = topEnfant + "px";
                         }
                         else
                         { 
                          colision(2,"div-enfant","lesMechant");
                           }
                         }
                          for (var j=0; j<lesMure2.length;j++){
                            if (colisionMur("div-enfant",lesMure2[j]) === true) 
                            {
                                enfant.style.top = topEnfant + "px";
                            }
                            else
                            {
                                colision(2,"div-enfant","lesMechant");
                            }
            }
            }

}
}


 
   var cde = setInterval(function() {
    var mechant1 = document.getElementById("mechant1");
    var mechant2 = document.getElementById("mechant2");
    var mechant3 = document.getElementById("mechant3");
    var mechant4 = document.getElementById("mechant4");
    console.log(mechant1);
    if (mechant4 != null) {
        deplacementenemi(mechant4);
    }
    if (mechant3 != null) {
        deplacementenemi(mechant3);
    }
    if(mechant2 != null){
        deplacementenemi(mechant2);
    }
    if(mechant1 != null) {
        deplacementenemi(mechant1);
    }
    if(mechant2 == null && mechant1 == null && mechant3 == null && mechant4 == null)
    {
        window.location.href="youwin.html";
        clearInterval(cde);
    }
},2000);
