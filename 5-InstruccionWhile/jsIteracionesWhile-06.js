function mostrar()
{
	var acumulador;
	var rondas;
	var numeroIngresado;
	var promedio;

	acumulador=0;
	rondas=0;
	
	while(rondas<4){
		numeroIngresado=prompt("Ingrese algun numero");
		numeroIngresado= parseInt(numeroIngresado);
		acumulador += numeroIngresado + acumulador;
		rondas++;
	}
	document.getElementById("txtIdSuma").value=acumulador;

	promedio= acumulador/5;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN