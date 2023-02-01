function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18){
		alert("No eres ADOLECENTE");
	}
	else if(edad > 12 && edad < 18){
		alert("Eres adolecente");
	}
	else{
		alert("Eres menor");
	}



}//FIN DE LA FUNCIÓN