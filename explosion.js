var positionXEnfant;
var positionYEnfant;
var bool = true;


var laBombe = document.getElementById("bombe");

function initBombe(){
		 	laBombe.style.position="absolute";
		 	laBombe.style.height = 50+"px";
		 	laBombe.style.width = 50+"px";
		 	laBombe.style.background ="url('images/egg.png')";
		 	laBombe.style.backgroundSize ="cover";
		 	laBombe.style.display = "none";
		 }

initBombe();

function afficheBombe(event){
	var enfant = document.getElementById("div-enfant");
	if (event.keyCode == 32) {
		if (bool === true) {
			bool = false;
			positionXEnfant = parseFloat(enfant.style.left.replace("px",""));
			positionYEnfant = parseFloat(enfant.style.top.replace("px",""));
			laBombe.style.top = positionYEnfant+"px";
			laBombe.style.left = positionXEnfant+"px";
			laBombe.style.display = "block";

			setTimeout(function(){
				bool = true;
				laBombe.style.display = "none";
				var sonBombe = document.getElementById("sonfusil");
				sonBombe.play();
				if (positionXEnfant === 0) 
				{

				}
				else
				{
					ajoutObjetBoum(50,positionYEnfant,positionXEnfant-50,"boum-Gauche","hihi","url('images/explosion.png')");
					colisionBoum("boum-Gauche","lesMechant");
					colisionBoum("boum-Gauche","lesDestructibles");
					colision(1,"div-enfant","boum-Gauche");
				}

				if (positionXEnfant === 450)
				{
					

				}
				else
				{
					ajoutObjetBoum(50,positionYEnfant,positionXEnfant+50,"boum-Droit","hihi","url('images/explosion.png')");
					colisionBoum("boum-Droit","lesMechant");
					colisionBoum("boum-Droit","lesDestructibles");
					colision(1,"div-enfant","boum-Droit");
				}

				
				if (positionYEnfant === 450) 
				{
					
				}
				else 
				{
					ajoutObjetBoum(50,positionYEnfant+50,positionXEnfant,"boum-Bas","hihi","url('images/explosion.png')");
					colisionBoum("boum-Bas","lesMechant");
					colisionBoum("boum-Bas","lesDestructibles");
					colision(1,"div-enfant","boum-Bas");
			    }

			    if (positionYEnfant === 0) 
			    {
			    	
			    }
			    else
			    {
			 		ajoutObjetBoum(50,positionYEnfant-50,positionXEnfant,"boum-haut","hihi","url('images/explosion.png')");
			 		colisionBoum("boum-haut","lesMechant");
			 		colisionBoum("boum-haut","lesDestructibles");
			 		colision(1,"div-enfant","boum-haut");
			 	}
				
					ajoutObjetBoum(50,positionYEnfant,positionXEnfant,"boum-Centre","hihi","url('images/explosion.png')");
					colisionBoum("boum-Centre","lesMechant");
					colisionBoum("boum-Centre","lesDestructibles");
					colision(1,"div-enfant","boum-Centre");

				
				setTimeout(function(){
			 				var elements = document.getElementsByClassName("hihi")
							while(elements.length > 0)
							{
       						 elements[0].parentNode.removeChild(elements[0]);
    						}
			  }, 1000);
			 },2000);
			
		}
	}
}
window.addEventListener("keydown",afficheBombe);