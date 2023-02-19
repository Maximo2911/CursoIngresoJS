function mostrar()
{
	let estacion;
	let destino;
	let mensaje;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion){

		//================================
		case "Invierno":
			switch (destino){
				case "Bariloche":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
					break;
			}	
			break;


		//==============================
		case "Verano":
			switch (destino){
				case "Cataratas":
				case "Mar del plata":
					mensaje="Se viaja";
					break;
			
				default:
					mensaje = "No se viaja";
					break;
			}
		break;
	
		
		case "Otoño":
			mensaje="Se viaja";
			break;
			
		default: //cataratas y mar del plata
			switch (destino) {
				case "Bariloche":
					mensaje = "No se viaja";
					break;
					default:
						mensaje="Se viaja";
						break;
			}
			break;
			
	}

	alert(estadia);

}//FIN DE LA FUNCIÓN