/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    //alambre = document.getElementById("txtIdRadio").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetro = largo*2 + ancho*2;
    perimetro = perimetro*3;

    alert(perimetro);
}
function Circulo () 
{
    let radio;
    let perimetro;

    radio = document.getElementById("txtIdRadio").value;
    //alambre = document.getElementById("txtIdRadio").value;

    radio = parseFloat(radio);

    perimetro = 3.14*radio*radio;
    perimetro = perimetro*3;

    alert(perimetro);
}
function Materiales () 
{
	let largo;
    let ancho;
    let cal;
    let cemento;
    let perimetro;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetro = ancho*2 + largo*2;
    cal = perimetro*3/4;
    cemento = perimetro*2/4;
    

    alert("Se necesitarán "+cal+" bolsas de cal y "+cemento+" de cemento");
}