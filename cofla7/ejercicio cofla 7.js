let alto = window.screen.height;
let ancho=window.screen.width;

comprar = confirm(`el alto es de ${alto}, el ancho es ${ancho}`);

if (comprar){
  alert("comprado exitosamente");

}else{
  alert("compra cancelada")
}
