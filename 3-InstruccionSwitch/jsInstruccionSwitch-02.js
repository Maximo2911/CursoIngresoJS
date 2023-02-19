function mostrar()
{
	//tomo el mes
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		//Enero
		case "Enero":
			mensaje="Verano"; //! si queremos que dos case tengan la misma consecuencia se saca el break  EJEMPLO : case "Enero": (seguido) case "Febrero": (consecuencia) break;
			break;

		case "Febrero":
			mensaje="Verano";
			break;

		case "Marzo":
			mensaje="Otoño";
			break;

		case "Abril":
			mensaje="Otoño";
			break;

		case "Mayo":
			mensaje="Otoño";
			break;

		case "Junio":
			mensaje="Otoño";
			break;

		case "Julio":
			mensaje="Invierno";
			break;

		case "Agosto":
			mensaje="Invierno";
			break;

		case "Septiembre":
			mensaje="Primavera";
			break;

		case "Octubre":
			mensaje="Primavera";
			break;

		case "Noviembre":
			mensaje="Primavera";
			break;

		case "Diciembre":
			mensaje="Primavera";
			break;

		/*
		default:
			break;*/
	}

	alert(mensaje);
}