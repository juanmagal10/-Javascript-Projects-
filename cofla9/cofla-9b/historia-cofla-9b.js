alumnos = [{
    nombre: "lucas dalto",
    email: "soydalto@gmail.com",
    materia: "fisica3"
    
},{
    nombre: "juanma galvan",
    email: "juanmagalvan.24@gmail.com",
    materia: "Lengua"
    
},{
    nombre: "Paco de Lucia",
    email: "pacoguitar@gmail.com",
    materia: "Biologia"
    
},{
    nombre: "Billy Bond",
    email: "billybond@hotmal.com.ar",
    materia: "Musica"
    
},{
    nombre: "Jorge Cafrune",
    email: "cafrune@gmail.com",
    materia: "Ed. Fisica"
    
    }]
 
const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container")
let htmlCode = "";

for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
     htmlCode += `<div class="grid-item nombre">${nombre}</div>
                    <div class="grid-item email">${email}</div>
                    <div class="grid-item materia">${materia}</div>
                    <div class="grid-item semana">
                      <select class="semana-elegida">
                          <option value="semana1">semana1</option>
                          <option value="semana2">semana2</option>

                       </select>
                    </div> `;

     
}
contenedor.innerHTML = htmlCode;   


boton.addEventListener("click", () => {
    let confirmar = confirm("seguro deseas guardar las mesas")
    if (confirmar) {
        document.body.removeChild(boton)
        let elementos = document.querySelectorAll(".semana")
        let semanas_elegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos) {
            semana = elementos[elemento];
            semana.innerHTML = semanas_elegidas[elemento].value;
        }
    }
})