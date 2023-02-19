/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let repeticiones;
	let numeros;

	numeros = 10;
	repeticiones = 0;

	while(repeticiones<10){
		
		console.log(numeros);
		numeros--;
		repeticiones++;
	}
}//FIN DE LA FUNCIÓN