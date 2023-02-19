function mostrar()
{
	//tomo la edad  
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;
	

	if((edad < 18) && ((estadoCivil == "Casado") || estadoCivil == "Divorciado")){
		alert("Eres muy pequeño para estar casado");
	}


}//FIN DE LA FUNCIÓN