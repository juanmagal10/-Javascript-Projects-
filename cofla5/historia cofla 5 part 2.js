let trabajo="240 minutos";
let estudio="100 minutos";
let tp ="100 minutos";
let homework="30 minutos";
let descanso="10 minutos";

//
// console.log("TAREAS");
// console.group("dia 1");
// console.log("trabajo")
// console.log("descanzo")
// console.log("estudio")
// console.log("tp")
// console.log("homework")}

for(var i=0;i<14;i++){
  if (i==0){
    console.groupCollapsed("semana 1")
  }
  console.groupCollapsed("dia"+(i+1));
  console.log("trabajo");
  console.log("descanzo");
  console.log("estudio");
  console.log("tp");
  console.log("homework")
  console.groupEnd();
  if (i==7){
    console.groupEnd();
    console.groupCollapsed("semana 2");
  }
}
console.groupEnd();
console.groupEnd();
