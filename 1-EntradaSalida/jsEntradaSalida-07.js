/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let nro;
	let nro2;

	nro = document.getElementById("txtIdNumeroUno").value;
	nro2 = document.getElementById("txtIdNumeroDos").value;

	nro = parseInt(nro);
	nro2 = parseInt(nro2);
	alert(nro + nro2);	
}

function restar()
{
	let nro;
	let nro2;

	nro = document.getElementById("txtIdNumeroUno").value;
	nro2 = document.getElementById("txtIdNumeroDos").value;

	nro = parseInt(nro);
	nro2 = parseInt(nro2);
	alert(nro - nro2);
}

function multiplicar()
{ 
	let nro;
	let nro2;

	nro = document.getElementById("txtIdNumeroUno").value;
	nro2 = document.getElementById("txtIdNumeroDos").value;

	nro = parseInt(nro);
	nro2 = parseInt(nro2);
	alert(nro * nro2);
}

function dividir()
{
	let nro;
	let nro2;

	nro = document.getElementById("txtIdNumeroUno").value;
	nro2 = document.getElementById("txtIdNumeroDos").value;

	nro = parseInt(nro);
	nro2 = parseInt(nro2);
	alert(nro / nro2);
}

