/**
 * Jokenpo
 * @author Ticiane França
 */

function jogar(){
	if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
		alert("Select an option, please.");
	} else{
		var sorteio = Math.floor(Math.random() * 3); //0 to 2
		switch(sorteio){
			case 0:
				document.getElementById("pc").src="Images/pcpedra.png";
				break;
			case 1:
				document.getElementById("pc").src="Images/pcpapel.png";
				break;
			case 2:
				document.getElementById("pc").src="Images/pctesoura.png";
				break;
		}
		//verificar o vencedor ou declarar empate
		if ((document.getElementById("pedra").checked == true && sorteio == 0) || (document.getElementById("papel").checked == true && sorteio == 1) || (document.getElementById("tesoura").checked == true && sorteio == 2)){
			document.getElementById("placar").innerHTML="TIE";
		} else if ((document.getElementById("pedra").checked == true && sorteio == 2) || (document.getElementById("papel").checked == true && sorteio == 0) || (document.getElementById("tesoura").checked == true && sorteio == 1)){
			document.getElementById("placar").innerHTML="PLAYER WON";
		} else {
			document.getElementById("placar").innerHTML="COMPUTER WON";
		}
	} 
}

function resetar(){
	document.getElementById("pc").src="Images/pc.png";
	document.getElementById("placar").innerHTML="";
}
