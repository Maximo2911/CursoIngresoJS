/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let nro;
	let nroDos;
    let nroTres;

	nro = document.getElementById("txtIdPrecioUno").value;
	nroDos = document.getElementById("txtIdPrecioDos").value;
    nroTres = document.getElementById("txtIdPrecioTres").value;

	nro = parseInt(nro);
	nroDos = parseInt(nroDos);
    nroTres = parseInt(nroTres);
	alert(nro + nroDos + nroTres);	
}
function Promedio () 
{
	let nro;
	let nroDos;
    let nroTres;
    

	nro = document.getElementById("txtIdPrecioUno").value;
	nroDos = document.getElementById("txtIdPrecioDos").value;
    nroTres = document.getElementById("txtIdPrecioTres").value;

	nro = parseInt(nro);
	nroDos = parseInt(nroDos);
    nroTres = parseInt(nroTres);
	alert((nro + nroDos + nroTres)/3);
}
function PrecioFinal () 
{
	let nro;
	let nroDos;
    let nroTres;
    let total;

	nro = document.getElementById("txtIdPrecioUno").value;
	nroDos = document.getElementById("txtIdPrecioDos").value;
    nroTres = document.getElementById("txtIdPrecioTres").value;

	nro = parseInt(nro);
	nroDos = parseInt(nroDos);
    nroTres = parseInt(nroTres);

    total = nro + nroDos + nroTres;
	alert(total + (total/100*21));
}