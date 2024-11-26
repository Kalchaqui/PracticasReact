const saldo = 2000
const pagar = 2500
const tarjeta = true

//Si tengo salgo siempre se ejecuta la primera linea

//if(saldo >= pagar){
  //  console.log("Puedo pagar con efectivo")
//}else if(tarjeta){
  //  console.log("No llego con efectivo, pago con tarjeta")
//}else {
  //  console.log("no puedo pagar")
//}

// LOGICAL (OR) LOGICAL (AND)
// || Or  almenos 1 se cumple
// && And revisa que todos se cumplan
if(saldo >= pagar ||  tarjeta){
    console.log("Puedo pagar")
     }else  { 
        console.log("No puedes pagar")

     }