function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 13 && edad <= 17){
		alert("Eres ADOLECENTE");
	}


}//FIN DE LA FUNCIÓN