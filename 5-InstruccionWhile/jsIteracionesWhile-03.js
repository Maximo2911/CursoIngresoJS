/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	

	clave = prompt("ingrese el número clave.");   //! clave = prompt("ingrese el número clave.").toLowerCase(); --> pasa todo las letras a minuscula
	
	/*
	while(clave=="utn750"){
		alert("ingresaste");
		clave = "nachi";
	}
	*/

	//*como realizó el profe el ejercicio
	while(clave!=="utn750" && clave!=="UTN750" ){
		alert("Error contraseña, incorrecta");
		
	}
	alert("Ingrese caballero");

	/* //!OTRA FORMA DE HACERLO
		while(!(clave=="utn750" || clave=="UTN750" )){
		alert("Error contraseña, incorrecta");
		
	}
	*/

}//FIN DE LA FUNCIÓN
