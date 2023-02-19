function mostrar()
{
	//tomo el mes
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		//Enero
		case "Enero":
			mensaje="Que comiences bien el año!!!";
			break;


		case "Marzo":
			mensaje="A clases!!!";
			break;


		case "Julio":
			mensaje="Se vienen las vacaciones";
			break;


		case "Diciembre":
			mensaje="Felices fiestas";
			break;
	
		default:
			mensaje="No se definio mensaje para el mes seleccionado";
			break;
	}

	alert(mensaje);
	



}//FIN DE LA FUNCIÓN