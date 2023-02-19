function mostrar()
{
	let random;
	let nota;
	
	random = Math.floor((Math.random() * 10) + 1);
	nota = random;

	if(nota > 8){
		alert("Excelente, "+ random);
	}
	else if(nota>4){
		alert("Aprobó, "+ random);
	}
	else{
		alert("Vamos, la proxima se puede, "+ random);
	}

}//FIN DE LA FUNCIÓN