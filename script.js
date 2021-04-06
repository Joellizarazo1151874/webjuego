document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 30;
necesarios = 55;
function sumarPuntos(){
	puntos++;
	document.getElementById("puntos").innerHTML = "puntos: <b>" + puntos + "/" + necesarios + "</b>";
	randNum = Math.round(Math.random()*450);
	randNum2 = Math.round(Math.random()*450);
	document.getElementById("player").style.marginTop = randNum + "px";
	document.getElementById("player").style.marginLeft = randNum2 + "px";
	if(puntos == 55){
		alert("ganaste mi amor, no estuvo dificil verdad ;)");
	}
}

function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo;
	if(tiempo == 0){
		alert("Perdiste amor :c intentalo de nuevo uwu");
		tiempo = 0;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);