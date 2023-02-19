/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/*
function CalcularPrecio () 
{
 	let cantidad;
    let descuento;
    let aumento;
    let marca;
    let total;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidad = parseInt(cantidad);

    // Si compra 6 o más
    if(cantidad > 5){
        descuento = (cantidad * 35)*50/100;    
    }//sino
    else{
        if(cantidad == 5){
            if(marca =="ArgentinaLuz"){
                descuento = (cantidad * 35)*40/100;
            }
            else{
                descuento = (cantidad * 35)*30/100;
            }
        }
        // ==================================================
        if(cantidad == 4){
            if(marca =="ArgentinaLuz" || marca =="FelipeLamparas"){
                descuento = (cantidad * 35)*25/100;
            }
            else{
                descuento = (cantidad * 35)*20/100;
            }
        }
        //==================================================
        if(cantidad == 3){
            if(marca =="ArgentinaLuz"){
                descuento = (cantidad * 35)*15/100;
            }
            else if(marca =="FelipeLamparas"){
                descuento = (cantidad * 35)*10/100;
            }
            else{
                descuento = (cantidad * 35)*5/100;
            }
        }
    }
    
    alert(descuento);
    total = cantidad * 35;
    total = total - descuento;
    
    //importe final mayor de 120
    if(total > 120){
        aumento = total *10/100;
        total = total + aumento;
        alert("Usted pago "+ total +" de IIBB.");
    }

    
    //muestro descuento en la ultima box
    document.getElementById("txtIdprecioDescuento").value = total;
}
*/

//* EJERCICIO HECHO CON IF
/*
function CalcularPrecio () 
{
 	let cantidad;
    let descuento;
    let aumento;
    let marca;
    let total;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidad = parseInt(cantidad);
    

     //Si compra 6 o más
    if(cantidad > 5){
        descuento = 0.5;    
    }
    else{
        if(cantidad == 5){
            if(marca =="ArgentinaLuz"){
                descuento = 0.4;
            }
            else{
                descuento = 0.3;
            }
        }
        // ==================================================
        if(cantidad == 4){
            if(marca =="ArgentinaLuz" || marca =="FelipeLamparas"){
                descuento = 0.25;
            }
            else{
                descuento = 0.2;
            }
        }
        //==================================================
        if(cantidad == 3){
            if(marca =="ArgentinaLuz"){
                descuento = 0.15;
            }
            else if(marca =="FelipeLamparas"){
                descuento = 0.1;
            }
            else{
                descuento = 0.05;
            }
        }
    }
    
    
    alert(descuento);
    total = cantidad * 35;
    cantidad = cantidad * 35;
    descuento = descuento * cantidad;
    total = total - descuento;
    
    
    if(total > 120){
        aumento = total *10/100;
        total = total + aumento;
        alert("Usted pago "+ total +" de IIBB.");
    }

    
    document.getElementById("txtIdprecioDescuento").value = total;
}*/   


//! IMPORTANTE: como lo resolvío el profe
//todo --> no está la función CALCULAR PRECIO
/*
    if(cantidad > 5){
        descuento = 0.5;    
    }
    else{
        if(cantidad == 5){
            if(marca =="ArgentinaLuz"){
                descuento = 0.4;
            }
            else{
                descuento = 0.3;
            }
        }
        else{
            if(cantidad == 4){
               if(marca =="ArgentinaLuz" || marca =="FelipeLamparas"){
                    descuento = 0.25;
                }
                else{
                    descuento = 0.2;
                } 
            }
            else{
                if(cantidad == 3){
                    if(marca =="ArgentinaLuz"){
                        descuento = 0.15;
                    }
                    else if(marca =="FelipeLamparas"){
                        descuento = 0.1;
                    }
                    else{
                        descuento = 0.05;
                    }
                }
            }
        }   
    }

    alert(descuento);
    total = cantidad * 35;
    cantidad = cantidad * 35;
    descuento = descuento * cantidad;
    total = total - descuento;
    
    
    if(total > 120){
        aumento = total *10/100;
        total = total + aumento;
        alert("Usted pago "+ total +" de IIBB.");
    }

    
    document.getElementById("txtIdprecioDescuento").value = total;
*/


//* Ejercicio con switch
/*
function CalcularPrecio () 
{
 	let cantidad;
    let descuento;
    let aumento;
    let marca;
    let total;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidad = parseInt(cantidad);
    

     
    switch (cantidad){
        //Si compra 6
        case 6:
            descuento = 0.5;
            break;

        //Si compra 5
        case 5:
        switch (marca) {
            case "ArgentinaLuz":
                descuento = 0.4;
                break;
        
            default:
                descuento = 0.3;
                break;
        }
        break;

        //Si compra 4
        case 4:
        switch (marca) {
            case "ArgentinaLuz":
                descuento = 0.25;
                break;

            case "FelipeLamparas":
                descuento = 0.25;
                break;
        
            default:
                descuento = 0.2;
                break;
        }
        break;
    
            // Si compra 3
            case 3:
            switch (marca) {
                case "ArgentinaLuz":
                    descuento = 0.15;
                    break;

                case "FelipeLamparas":
                    descuento = 0.1;
                    break;
            
                default:
                    descuento = 0.05;
                    break;
            }

            case 2:
            case 1:
                descuento= 0;
                break;
            

        default:
           descuento=0.5;
            break;
    }

    alert(descuento);
    total = cantidad * 35;
    cantidad = cantidad * 35;
    descuento = descuento * cantidad;
    total = total - descuento;
    
    
    if(total > 120){
        aumento = total *10/100;
        total = total + aumento;
        alert("Usted pago "+ total +" de IIBB.");
    }

    
    document.getElementById("txtIdprecioDescuento").value = total;  
}
*/


//* Ejercicio con IF/SWITCH
/*
function CalcularPrecio () 
{
    let cantidad;
    let aumento;
    let descuento;
    let marca;
    let total;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidad = parseInt(cantidad);

    if(cantidad > 5){
        descuento=0.5;
    }
    else{
        if(cantidad > 4){
            switch (marca) {
                case "ArgentinaLuz":
                    descuento = 0.4;
                    break;
            
                default:
                    descuento= 0.3;
                    break;
            }
        }
        else{
            if(cantidad >3){
                switch (marca) {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento= 0.25;
                        break;
                
                    default:
                        descuento= 0.2;
                        break;
                }
            }
            else{
                if(cantidad >2){
                    switch (marca) {
                        case "ArgentinaLuz":
                            descuento=0.15;
                            break;
    
                        case "FelipeLamparas":
                            descuento=0.1;
                            break;
                    
                        default:
                            descuento=0.05;
                            break;
                    
                }}
                else{
                    descuento=0;
                }
            }
        }
    }


    alert(descuento);
    total = cantidad * 35;
    cantidad = cantidad * 35;
    descuento = descuento * cantidad;
    total = total - descuento;
    
    
    if(total > 120){
        aumento = total *10/100;
        total = total + aumento;
        alert("Usted pago "+ total +" de IIBB.");
    }

    
    document.getElementById("txtIdprecioDescuento").value = total;


    
}
*/


//* EJERCICIO SWITCH/IF

function CalcularPrecio () 
{
    let cantidad;
    let aumento;
    let descuento;
    let marca;
    let total;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidad = parseInt(cantidad);

    switch (cantidad) {

        //Cantidad 6
        case 6:
            descuento=0.5;
            break;


        //Cantidad 5
        case 5:
            if(marca == "ArgentinaLuz"){
                descuento=0.4;
            }
            else{
                descuento=0.3;
            }
            break;


        //Cantidad 4
        case 4:
            if(marca == "ArgentinaLuz" | marca == "FelipeLamparas"){
                descuento=0.25;
            }
            else{
                descuento=0.2;
            }
            break;


        //Cantidad 3
        case 3:
            if(marca == "ArgentinaLuz"){
                descuento=0.15;
            }
            else{
                if(marca == "FelipeLamparas"){
                    descuento=0.1;
                }
                else{
                    descuento=0.05;
                }
            }
            break;

        default:
            descuento=0;
            break;

    }

    alert(descuento);
    total = cantidad * 35;
    cantidad = cantidad * 35;
    descuento = descuento * cantidad;
    total = total - descuento;
    
    
    if(total > 120){
        aumento = total *10/100;
        total = total + aumento;
        alert("Usted pago "+ total +" de IIBB.");
    }

    
    document.getElementById("txtIdprecioDescuento").value = total;


}