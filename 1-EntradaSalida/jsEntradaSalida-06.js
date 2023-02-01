/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let nro;
	let nroDos;

	nro = document.getElementById("txtIdNumeroUno").value;
	nroDos = document.getElementById("txtIdNumeroDos").value;

	nro = parseInt(nro);
	nroDos = parseInt(nroDos);
	alert(nro + nroDos);
}

