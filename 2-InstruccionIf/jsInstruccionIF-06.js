function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18){
		alert("Mayor");
	}
	else if(edad > 12 && edad < 18){
		alert("Adolecente");
	}
	else{
		alert("Menor");
	}


	//! Forma más efectiva, solamente 2 preguntas
	/*
		if(edad >17){
			mensaje = "La persona es mayor";
		}
		else{
			if(edad < 13){
				mensaje = "La persona es un niño";
			}
			else{
				mensaje = "La persona es adolecente";
			}
		}

		alert(mensaje);
	*/


}//FIN DE LA FUNCIÓN