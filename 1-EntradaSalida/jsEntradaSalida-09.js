/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	/*
	let sueldo;
	let aumento;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	aumento = sueldo + ((sueldo/100)*10);
	document.getElementById("txtIdResultado").value = aumento;
	*/
	let sueldo;
	let aumento;
	let porcentaje;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	
	porcentaje = prompt("Ingrese el porcentaje del aumento");
	porcentaje = parseInt(porcentaje);
	

	aumento = sueldo + ((sueldo/100)*porcentaje);
	document.getElementById("txtIdResultado").value = aumento;


}

