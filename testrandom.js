function random1 () {

	return Math.floor(Math.random() * 4) + 1;
	
}

function random2 () {
	return Math.floor(Math.random() * 3) + 1;

}


function deplacementenemi (idmechant) {
	var gauche = parseFloat(idmechant.style.left.replace("px",""));
	var droite = parseFloat(idmechant.style.right.replace("px",""));
	var haut = parseFloat(idmechant.style.top.replace("px",""));
	var bas = parseFloat(idmechant.style.bottom.replace("px",""));
	var mechant = document.getElementById(idmechant);
	var rand1 = random1();
	var rand2 = random2();
	
	

	if (rand1 === 1) 
	{
			if (rand2 === 1) 
			{	
				
				if(gauche < 450) {
					var inter = 0;
					var abc = setInterval(function() {
						gauche++;
						inter++;
						idmechant.style.left = gauche+"px";
						if (inter === 50) {clearInterval(abc);}
						colision(2,"div-enfant","lesMechant");
					},5);
				}
			
			} 
			else if (rand2 === 2)
			{
				if(gauche<400) {
					var inter = 0;
					var abc = setInterval(function() {
						gauche++;
						inter++;
						idmechant.style.left = gauche+"px";
						if (inter === 100) {clearInterval(abc);}
						colision(2,"div-enfant","lesMechant");
					},5);
				}
			}
			else if (rand2 === 3)
			{
				if(gauche<350) {
					var inter = 0;
					var abc = setInterval(function() {
						gauche++;
						inter++;
						idmechant.style.left = gauche+"px";
						if (inter === 150) {clearInterval(abc);}
						colision(2,"div-enfant","lesMechant");
					},5);
				}
			}
			

	}

	if (rand1 === 2) 
	{
			if (rand2 === 1) 
			{
				if(gauche>50) {
					var inter = 0;
					var abc = setInterval(function() {
						gauche--;
						inter--;
						idmechant.style.left = gauche+"px";
						if(inter === -50) {clearInterval(abc);}
						colision(2,"div-enfant","lesMechant");
					},5);
				}
			} 
			else if (rand2 === 2)
			{
				if(gauche>100) {
					var inter = 0;
					var abc = setInterval(function() {
						gauche--;
						inter--;
						idmechant.style.left = gauche+"px";
						if(inter === -100){clearInterval(abc);}
						colision(2,"div-enfant","lesMechant");
					},5);
				}
			}
			else if (rand2 === 3)
			{
				if(gauche>150) {
					var inter = 0;
					var abc = setInterval(function() {
						gauche--;
						inter--;
						idmechant.style.left = gauche+"px";
						if(inter === -150){clearInterval(abc);}
						colision(2,"div-enfant","lesMechant");
					},5);
				}
			}
		
			else {}
	}

	if (rand1 === 3) 
	{
			if (rand2 === 1) 
			{
				if(haut<450) {
					var inter = 0;
					var abc = setInterval(function() {
						haut++;
						inter++;
						idmechant.style.top = haut+"px";
						if(inter === 50) {clearInterval(abc);}
						colision(2,"div-enfant","lesMechant");
					},5);
				}
			} 
			else if (rand2 === 2)
			{
				if(haut<400) {
					var inter = 0;
					var abc = setInterval(function() {
						haut++;
						inter++;
						idmechant.style.top = haut+"px";
						if(inter === 100) {clearInterval(abc);}
						colision(2,"div-enfant","lesMechant");
					},5);
				}
			}
			else if (rand2 === 3)
			{
				if(haut<350){
					var inter = 0;
					var abc = setInterval(function() {
						haut++;
						inter++;
						idmechant.style.top = haut+"px";
						if(inter === 150) {clearInterval(abc);}
						colision(2,"div-enfant","lesMechant");
					},5);
				}
			}
			else {}
	}
	
	if (rand1 === 4) 
	{
			if (rand2 === 1) 
			{
				if(haut>50){
					var inter = 0;
					var abc = setInterval(function() {
						haut--;
						inter--;
						idmechant.style.top = haut+"px";
						if(inter === -50) {clearInterval(abc);}
						colision(2,"div-enfant","lesMechant");
					},5);
				}
			} 
			else if (rand2 === 2)
			{
				if(haut>100) {
					var inter = 0;
					var abc = setInterval(function() {
						haut--;
						inter--;
						idmechant.style.top = haut+"px";
						if(inter === -100) {clearInterval(abc);}
						colision(2,"div-enfant","lesMechant");
					},5);
				}
			}
			else if (rand2 === 3)
			{
				if(haut>150) {
					var inter = 0;
					var abc = setInterval(function() {
						haut--;
						inter--;
						idmechant.style.top = haut+"px";
						if(inter === -150) {clearInterval(abc);}
						colision(2,"div-enfant","lesMechant");
					},5);
				}
			}
			else {}
	}

}


