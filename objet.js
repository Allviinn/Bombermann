var newOjet;
var objetParent;

function ajoutObjet(taille,y,x,nom,couleur) {
			//création de l'objet
			newOjet = document.createElement('div');
			newOjet.setAttribute("id",nom);
			newOjet.style.position="absolute";
			newOjet.style.width = taille+"px";
			newOjet.style.height = taille+"px";
			newOjet.style.top =  y+"px";
			newOjet.style.left = x+"px";
			newOjet.style.backgroundRepeat = "no-repeat";
			newOjet.style.backgroundImage = couleur;
			newOjet.style.backgroundPosition = "center";
			// ajout dans son parant
			objetParent = document.getElementById("div-parent");
			objetParent.appendChild(newOjet);
							
}

function plusieurOjet(nbMechant,taille,y,x,nomId,nomClass,couleur){
	for(i=1; i <= nbMechant ; i++){
		//création de l'objet
			newOjet = document.createElement('div');
			newOjet.setAttribute("id",nomId+i);
			newOjet.className = nomClass;
			newOjet.style.position="absolute";
			newOjet.style.width = taille+"px";
			newOjet.style.height = taille+"px";
			newOjet.style.top =  y+"px";
			newOjet.style.left = x+"px";
			newOjet.style.background = couleur;
			// ajout dans son parant
			objetParent = document.getElementById("div-parent");
			objetParent.appendChild(newOjet);
			y+=100;
			x+= 50;
	}
}

function ajoutObjetBoum(taille,y,x,nom,className,couleur) {
			//création de l'objet
			newOjet = document.createElement('div');
			newOjet.setAttribute("id",nom);
			newOjet.className = className;
			newOjet.style.position="absolute";
			newOjet.style.width = taille+"px";
			newOjet.style.height = taille+"px";
			newOjet.style.top =  y+"px";
			newOjet.style.left = x+"px";
			newOjet.style.background = couleur;
			// ajout dans son parant
			objetParent = document.getElementById("div-parent");
			objetParent.appendChild(newOjet);
							
}





