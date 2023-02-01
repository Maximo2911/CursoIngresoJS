function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >=18){
		alert("No eres ADOLECENTE");
	}

}//FIN DE LA FUNCIÓN