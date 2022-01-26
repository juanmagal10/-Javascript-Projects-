const sumar=(num1,num2)=>{
  return parseInt(num1)+parseInt(num2);
}
const restar=(num1,num2)=>{
  return parseInt(num1)-parseInt(num2);
}
const dividir=(num1,num2)=>{
  return parseInt(num1)/parseInt(num2);
}
const multiplicar=(num1,num2)=>{
  return parseInt(num1)*parseInt(num2);
}

alert("que operacino desea realizar?");
operacion =prompt("1=suma, 2=resta, 3=dividir, 4=multiplicar");

if (operacion==1){
  let numero1=prompt("elige el primer num");
  let numero2=prompt("elige el segundo num");
  resultado=sumar(numero1, numero2);
  alert("tu resultado es"+resultado);
}
else if (operacion==2){
  let numero1=prompt("elige el primer num");
  let numero2=prompt("elige el segundo num");
  resultado=restar(numero1, numero2);
  alert("tu resultado es"+resultado);
}
else if (operacion==3){
  let numero1=prompt("elige el primer num");
  let numero2=prompt("elige el segundo num");
  resultado=dividir(numero1, numero2);
  alert("tu resultado es"+resultado);
}
else if (operacion==4){
  let numero1=prompt("elige el primer num");
  let numero2=prompt("elige el segundo num");
  resultado=multiplicar(numero1, numero2);
  alert("tu resultado es"+resultado);
}
else{
  alert("opcion invalida");
}
