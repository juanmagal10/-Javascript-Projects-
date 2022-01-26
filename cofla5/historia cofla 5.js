// script q dice si el alumno desaprobo o no segun las asistencias,
//  minimo 90%, el promedio y la cantidad de trabajo entregados. Si salen todas
// las condiciones en verde el alumno aprueba.

const materias ={
  fisica: [90,6,4, "fisica"],
  matematica: [84,8,8,"matematica"],
  logica: [96,6,4, "logica"],
  quimica: [80,6,4,"quimica"],
  calculo: [96,8,4,"calculo"],
  programacion: [91,6,3, "programacion"],
  biologia: [79,6,7, "biologia"],
  bbdd: [55,9,2, "bbdd"],
  algebra: [45,6,0, "algebra"]
}

const asistencia=() =>{
  for (materia in materias){
    let asistencias=materias[materia][0];
    let promedio=materias[materia][1];
    let trabajos=materias[materia][2];
    console.log(materias[materia][3])
    if (asistencias>=90){
      console.log("%c   Asistencias en orden", "color:green");
    }else{
      console.log("%c   Asistencias insuficientes", "color:red");
    }
    if (promedio>=7){
      console.log("%c   Promedio en orden", "color:green");
    }else{
      console.log("%c   Promedio insuficiente", "color:red");
    }
    if (trabajos>=3){
      console.log("%c   Trabajos practicos en orden", "color:green");
    }else{
      console.log("%c   Trabajos practicos insuficientes", "color:red");
    }
  }
}
asistencia()
