/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let repeticiones;
	let numeros;

	numeros = 1;
	repeticiones = 0;

	while(repeticiones<10){
		
		console.log(numeros);
		numeros++;
		repeticiones++;
	}
	
	
	alert('iteración while');
}//FIN DE LA FUNCIÓN