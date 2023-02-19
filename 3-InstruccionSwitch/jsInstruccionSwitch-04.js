function mostrar()
{
	//tomo el mes
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
			 //! si queremos que dos case tengan la misma consecuencia se saca el break  EJEMPLO : case "Enero": (seguido) case "Febrero": (consecuencia) break;

		case "Febrero":
			mensaje="Tiene 28 días";
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Tiene 30 días";
			break;

		

		
		default:
			mensaje = "tiene 31 días";
			break;

	} //! CORRECCION DEL PROFE: adjuntar los meses de igual cantidad de días.
	  //* se puede usar el default para hacer el caso de la mayoria de meses.

	alert(mensaje);
}