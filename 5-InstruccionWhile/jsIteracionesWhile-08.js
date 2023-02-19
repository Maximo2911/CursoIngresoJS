/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
function mostrar()
{  //!HECHO solo con while
	let numeros;
	let rondas;
	let acumuladorPositivo;
	let acumuladorNegativo;
	let bandera;
	let negativo;
	let respuesta="si";

	rondas=0;
	acumuladorPositivo=0;
	banderaNegativo=1;
	banderaPositivo=1;

	while(respuesta=="si"){
		numeros=prompt("Ingrese un numero");
		numeros=parseInt(numeros);
		rondas++;

		while(numeros<0 && respuesta=="si"){
			while(banderaNegativo==1){
				acumuladorNegativo=banderaNegativo*numeros;
				banderaNegativo=0;
			}
			while(banderaNegativo==0){
				acumuladorNegativo=acumuladorNegativo*numeros;
			}
			respuesta=prompt("Quieres seguir poniendo numeros?(negativo)");
			

		}
		while(numeros>0 && respuesta=="si"){
			acumuladorPositivo=acumuladorPositivo+numeros;
			respuesta=prompt("Quieres seguir poniendo numeros?(positivo)");
			while(banderaPositivo==0){
				numeros=prompt("Ingrese un numero");
				numeros=parseInt(numeros);
			}
			banderaPositivo=0;
			
		}
	}


	document.getElementById("txtIdSuma").value=acumuladorNegativo;
	document.getElementById("txtIdProducto").value=acumuladorPositivo;

}//FIN DE LA FUNCIÓN*/



function mostrar()
{

	let vueltas;
	let numero;
	let acumuladorPositivo;
	let acumuladorNegativo;
	let respuesta;
	let flag;

	respuesta="si";
	vueltas=0;
	flag=1;
	acumuladorNegativo=1;
	acumuladorPositivo=0;	
	
	do{
		numero = prompt('Ingrese un numero');
		numero = parseInt(numero);

		if(numero>0){
			acumuladorPositivo = acumuladorPositivo + numero;
		}
		else{
			acumuladorNegativo = acumuladorNegativo * numero;
			flag=0;
			
		}
		
		respuesta = prompt('Quieres seguir ingresando numeros?');
		vueltas++;
	}while(respuesta=="si");



	if(flag == 1){
		document.getElementById("txtIdProducto").value=acumuladorNegativo;
	}
	else{
		document.getElementById("txtIdProducto").value=0;
	}
	document.getElementById("txtIdSuma").value=acumuladorPositivo;
	document.getElementById("txtIdProducto").value=acumuladorNegativo;

}