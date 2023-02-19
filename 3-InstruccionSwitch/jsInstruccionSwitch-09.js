/*function mostrar()
{
	let estacion;
	let destino;
	let descuento;
	let estadia = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion){

		//================================
		case "Invierno":
			switch (destino){
				case "Bariloche":
					descuento= 0.2;
					descuento= estadia*descuento;
					estadia = estadia+descuento;
					break;
				case "Mar del plata":
					descuento= 0.2;
					descuento= estadia*descuento;
					estadia = estadia-descuento;
					break;
				default:
					descuento= 0.1;
					descuento= estadia*descuento;
					estadia = estadia-descuento;
					break;
			}	
			break;


		//==============================
		case "Verano":
			switch (destino){
				case "Bariloche":
					descuento= 0.2;
					descuento= estadia*descuento;
					estadia = estadia-descuento;
					break;
				case "Mar del plata":
					descuento= 0.2;
					descuento= estadia*descuento;
					estadia = estadia+descuento;
					break;
			
				default:
					descuento=0.1;
					descuento= estadia*descuento;
					estadia = estadia+descuento;
					break;
			}
		break;
	
		
		
		
			
		default: //cataratas y mar del plata

			switch (destino) {
				case "Mar del plata":
				case "Cataratas":
				case "Bariloche":
					descuento=0.1;
					descuento= estadia*descuento;
					estadia = estadia+descuento;
					break;
			}
			break;
			
	}

	alert(estadia);

}//FIN DE LA FUNCIÓN
*/

//*Ejercicio con SWITCH/IF
function mostrar()
{
	let estacion;
	let destino;
	let descuento;
	let estadia = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion){

		//================================
		case "Invierno":
			if(destino=="Bariloche"){
				descuento=0.2;
				estadia=estadia*descuento;
				estadia=estadia+descuento;
			}
			else{
				if(destino=="Mar del plata"){
					descuento=0.2;
					descuento= estadia*descuento;
					descuento= estadia-descuento;
				}
				else{
					descuento=0.1;
					descuento= estadia*descuento;
					descuento= estadia-descuento;
				}
			}
			break;



		//==============================
		case "Verano":
			if(destino=="Bariloche"){
				descuento=0.2;
				estadia=estadia*descuento;
				estadia=estadia-descuento;
			}
			else{
				if(destino=="Mar del plata"){
					descuento=0.2;
					descuento= estadia*descuento;
					descuento= estadia+descuento;
				}
				else{
					descuento=0.1;
					descuento= estadia*descuento;
					descuento= estadia+descuento;
				}
			}
			break;
	
		
		
		
			
		default: //cataratas y mar del plata

			if(destino=="Mar del plata"|| destino=="Cataratas"||destino=="Bariloche"){
				descuento=0.1;
				descuento= estadia*descuento;
				estadia = estadia+descuento;
			}

			
			
	}
				
}