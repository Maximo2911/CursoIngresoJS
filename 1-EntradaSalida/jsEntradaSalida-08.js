/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let nro;
	let nro2;

	nro = document.getElementById("txtIdNumeroDividendo").value;
	nro2 = document.getElementById("txtIdNumeroDivisor").value;

	nro = parseInt(nro);
	nro2 = parseInt(nro2);
	alert(nro % nro2);
}
