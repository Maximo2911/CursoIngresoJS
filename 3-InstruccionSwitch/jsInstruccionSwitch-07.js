function mostrar()
{
	let destino =document.getElementById("txtIdDestino").value;
	let mensaje;
	
	switch (destino) {
		case "Bariloche":
			mensaje="Este";
			break;
	
		case "Ushuaia":
			mensaje="Sur";
			break;

		case "Cataratas":
			mensaje="Norte";
			break;

		default:
			mensaje="Oeste";
			break;
	}
	
	
	
	alert(destino);

}//FIN DE LA FUNCIÓN