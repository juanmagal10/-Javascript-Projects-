class Calculadora{
  constructor(){

  }
sumar(num1,num2){
  return parseInt(num1)+parseInt(num2);
}
restar(num1,num2){
  return parseInt(num1)-parseInt(num2);
}
dividir(num1,num2){
  return parseInt(num1)/parseInt(num2);
}
multiplicar(num1,num2){
  return parseInt(num1)*parseInt(num2);
}
potenciar(num,exp){
  let numero=num;
  for (var i=1;i<exp;i++){
    numero=numero*num;
  }
  return numero;
}
raizCuadrada(num){
  return Math.sqrt(num);
}

raizCubica(num){
  return Math.cbrt(num)
}
}
const calculadora = new Calculadora();

alert("que operación desea realizar?");
operacion =prompt("1=suma, 2=resta, 3=dividir, 4=multiplicar, 5=potenciacion, 6=raiz cuadrada, 7=raiz cubica");

if (operacion==1){
  let numero1=prompt("elige el primer num");
  let numero2=prompt("elige el segundo num");
  resultado=calculadora.sumar(numero1, numero2);
  alert("tu resultado es "+resultado);
}
else if (operacion==2){
  let numero1=prompt("elige el primer num");
  let numero2=prompt("elige el segundo num");
  resultado=calculadora.restar(numero1, numero2);
  alert("tu resultado es "+resultado);
}
else if (operacion==3){
  let numero1=prompt("elige el primer num");
  let numero2=prompt("elige el segundo num");
  resultado=calculadora.dividir(numero1, numero2);
  alert("tu resultado es "+resultado);
}
else if (operacion==4){
  let numero1=prompt("elige el primer num");
  let numero2=prompt("elige el segundo num");
  resultado=calculadora.multiplicar(numero1, numero2);
  alert("tu resultado es "+resultado);
}

else if (operacion==5){
  let numero1=prompt("numero a potenciar");
  let numero2=prompt("exponente");
  resultado=calculadora.potenciar(numero1, numero2);
  alert("tu resultado es "+resultado);
}
else if (operacion==6){
  let numero1=prompt("coonocer la raiz cuadrada de:");
  resultado=calculadora.raizCuadrada(numero1);
  alert("la raiz cuadrada es " + resultado);
}
else if (operacion==7){
  let numero1=prompt("coonocer la raiz cubica de:");
  resultado=calculadora.raizCubica(numero1);
  alert("la raiz cubica es " + resultado);
}

else{
  alert("opcion invalida");
}
