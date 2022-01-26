// script para administrar entrada a un boliche y dar una entrada gratis
// a la primera persona que entre
let free=false;
const validarCliente=(time)=>{
  let edad=prompt("cual es tu edad?");
  if(edad >= 18){
    if(time >=2 && time <=7 && free==false){
      alert("podes pasar")
      free=true;
    }else{
      alert("podes pasar pero pagas");
    }

  }else{
    alert("sos menor y no pasas");
  }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(1);
validarCliente(2);
