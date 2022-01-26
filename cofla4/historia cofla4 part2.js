const obtenerInformacion=(materia)=>{
  materias = {
    fisica: ["perez","pedro", "pepito", "cofla", "maria"],
    programacion: ["dalto","pedro", "juan", "pepito"],
    logica: ["rodriguez","pedro", "juan", "pepito", "cofla", "maria"],
    quimica: ["hernandes","pedro", "juan", "pepito", "cofla", "maria"]
  }
  if (materias[materia] !== undefined){
    return [materias[materia], materia,materias];
  }else{
    return materias
  }
}

const mostrarInformacion=(materia)=>{
  let informacion=obtenerInformacion(materia);

  if (informacion!==false){
    let profesor=obtenerInformacion(materia)[0][0];
    alumnos = obtenerInformacion(materia)[0];
    alumnos.shift;
    document.write(`el profesor de <b>${informacion[1]}</b> es: <b style="color:
    blue">${profesor}</b><br> y los alumnos son: <b style="color:red">${alumnos}</b><br><br>`)
  }
}
const cantidadDeClases=(alumno)=>{
  let informacion=obtenerInformacion();
  let clasesPresentes = [];
  let cantidadTotal = 0;
  for (info in informacion){
    if (informacion[info].includes(alumno)){
      cantidadTotal++;
      clasesPresentes.push(info+" ");
    }
  }
  return `<b style="color:blue">${alumno}</b> esta en <b>${cantidadTotal}</b> clases<br>
  esta cursando las clases:<b style="color:green">${clasesPresentes}</b>`
}


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
document.write(cantidadDeClases("cofla"));
