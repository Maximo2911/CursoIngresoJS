/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

/*	while(sexoIngresado=="f" || sexoIngresado=="m"){
		alert("sexo ingresado registrado");
		sexoIngresado=0;

	}*/
	//* COMO LO REALIZO EL PROFE
	while(sexoIngresado!=="f" || sexoIngresado!=="m"){
		sexoIngresado = prompt("ingrese f ó m .");

	}
	document.getElementById("txtIdSexo").value=sexoIngresado;

}//FIN DE LA FUNCIÓN