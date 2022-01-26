class Celulares{
  constructor(color, peso, tamaño, rdc,ram){
    this.color=color;
    this.peso=peso;
    this.tamaño=tamaño;
    this.resolucionDeCamara=rdc;
    this.memoriaRam=ram;
    this.encendido=false;
  }
  botonEncendido(){
    if (this.encendido==false){
      alert("telefono prendido");
      this.encendido=true;
    }else{
      alert("celular apagado");
    }
  }
  botonReiniciar(){
    if (this.encendido==true){
      alert("reiniciando");
    }else{
      alert("celular apagado");
      this.encendido=false;
    }
}
  tomarFotos(){
    alert(`foto tomada en una resolucion de:${this.resolucionDeCamara}`);
  }
  grabarVideo(){
    alert(`video grabado en una resolucion de:${this.resolucionDeCamara}`);
  }
  mostrarInfo(){
    return`
    Color: <b>${this.color}</b><br>
    Peso: <b>${this.peso}</b><br>
    Resolución de camara: <b>${this.resolucionDeCamara}</b><br>
    Tamaño: <b>${this.tamaño}</b><br>
    Memoria RAM: <b>${this.memoriaRam}</b><br>`
  }
}
class CelularAltaGama extends Celulares{
  constructor(color, peso, tamaño, rdc,ram, rdce){
    super(color, peso, tamaño, rdc,ram);
    this.resolucionCamaraExtra=rdce;
  }
  grabarCamaraLenta(){
    alert("estas grabando en camara lenta");
  }
  reconocimientoFacial(){
    alert("estamos iniciando el reconocimiento facial");
  }
  infoAltaGama(){
    return this.mostrarInfo()+`Resolucion
    de Camara Extra: ${this.ResoluciondeCamaraExtra}`
  }
}

  // const celular1 = new Celulares("rojo","150 g","5'", "hd", "1 gb" );
  // const celular2 = new Celulares("negro","155 g","5.4'", "full hd", "2 gb" );
  // const celular3 = new Celulares("blaco","146 g","5.9'", "full hd", "2 gb" );
  // // celular1.botonEncendido();
  // celular1.tomarFotos();
  // celular1.grabarVideo();
  // celular1.botonReiniciar();
  // celular1.botonEncendido();
  celular1= new CelularAltaGama("rojo", "130g","5.2'", "4k", "3gb", "full HD" );
  celular2= new CelularAltaGama("negro", "142g","6'", "4k", "4gb", " HD" );
  document.write(`
    ${celular1.infoAltaGama()}<br><br>
    ${celular2.infoAltaGama()}<br>
    `)
