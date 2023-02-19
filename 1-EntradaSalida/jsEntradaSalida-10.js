/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
function mostrarAumento()
{
	let importe;
	let descuento;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	descuento = importe - ((importe/100)*25);
	document.getElementById("txtIdResultado").value = descuento;
}
*/

/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del(que ingresará el usuario al prompt)
en el cuadro de texto "RESULTADO"
*/

function mostrarAumento()
{
	let importe;
	let descuento;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	descuento = prompt("Ingrese el porcentaje de descuento");
	descuento = parseInt(descuento);                           // EL profe lo pone como parseFloat
	descuento = importe - ((importe/100)* descuento);
	document.getElementById("txtIdResultado").value = descuento;

	
}