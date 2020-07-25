/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
   let lamparas;
   let precio;
   let IIBB;
   let descuento;
   let marca;
   let precioConDescuento;
   let tIngresosbrutos;



   lamparas = parseInt(document.getElementById("txtIdCantidad").value);

   marca = document.getElementById("Marca").value;

   precio = lamparas * 35

   /*EJERCICIO A*/

   if (lamparas >= 6) {
      descuento = 0.50;


   }

   /*EJERCICIO B*/

   else if (lamparas == 5) {
      if (lamparas == 5 && marca == "ArgentinaLuz") {
         descuento = 0.40;
      }

      else {
         descuento = 0.30;


      }
   }
   /*EJERCICIO C*/

   else if (lamparas == 4) {
      if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
         descuento = 0.25;
      }

      else {
         descuento = 0.20;
      }

   }
   /*EJERCICIO D*/
   else if (lamparas == 3) {
      if (marca == "ArgentinaLuz") {
         descuento = 0.15;
      }
      else if (marca == "FelipeLamparas") {
         descuento = 0.10;

      }
      else { descuento = 0.05 }

   }

   precioConDescuento = precio - (precio * descuento);


   document.getElementById("txtIdprecioDescuento").value = "$" + precioConDescuento;

   /*EJERCICIO E*/

   if (precioConDescuento > 120){
      tIngresosbrutos = precioConDescuento * 1.10;
      IIBB= tIngresosbrutos - precioConDescuento;
   
      alert("Ud. pagó $" + tIngresosbrutos + " siendo $" + IIBB  + " el impuesto total pagado")
   }

}