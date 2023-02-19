function mostrar()
{
	let destino =document.getElementById("txtIdDestino").value;
	let mensaje;
	
	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			mensaje="Frio";
			break;


		default:
			mensaje="Calor";
			break;
	}
	
	
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN