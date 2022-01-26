class App{
  constructor(descargas,puntuacion,peso){
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }
  instalar(){
    if (this.instalada==false){
      this.instalada=true;
      alert("app instalada correctamente")
    }
  }
  desinstalar(){
    if (this.instalada==true){
      this.instalada=false;
      alert("app desinstalada correctamente")
    }
  }
  abrir(){
    if (this.iniciada==false && this.instalada==true){
      this.iniciada=true;
      alert("app iniciada")
    }
  }
  cerrar(){
    if (this.iniciada==true && this.instalada == true){
      this.iniciada=false;
      alert("app cerrada")
    }
  }
  appInfo(){
    return`
    Descargas:<b>${this.descargas}</b><br>
     Puntuación:<b>${this.puntuacion}</b><br>
     Peso:<b>${this.peso}</b><br>`;
  }
}
app = new App("8.000", "5 estrellas", "650mb");
app2 = new App("17.000", "4 estrellas", "400mb");
app3 = new App("29.000", "5 estrellas", "100mb");
app4 = new App("18.000", "4 estrellas", "900mb");
app5 = new App("14.000", "3 estrellas", "9gb");
app6 = new App("10.000", "1 estrella", "700mb");
app7 = new App("1.000", "5 estrellas", "300mb");


document.write(`
  ${app.appInfo()}<br>
  ${app2.appInfo()}<br>
  ${app3.appInfo()}<br>
  ${app4.appInfo()}<br>
  ${app5.appInfo()}<br>
  ${app6.appInfo()}<br>
  ${app7.appInfo()}<br>
  `);
// app.instalar()
// app.abrir(
// app.cerrar()
// app.desinstalar()
// console.log(app6)
