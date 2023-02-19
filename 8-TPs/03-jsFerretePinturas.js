/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let fahrenheit;

    temperatura = document.getElementById("txtIdTemperatura").value;
    tempertatura = parseFloat(temperatura);

    fahrenheit = (temperatura-32)*(5/9);
    alert(fahrenheit);


}

function CentigradosFahrenheit () 
{
	let temperatura;
    let centigrados;

    temperatura = document.getElementById("txtIdTemperatura").value;
    tempertatura = parseFloat(temperatura);

    centigrados = (temperatura*9/5)+32;
    alert(centigrados);
}
