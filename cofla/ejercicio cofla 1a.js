var cofla=3;
var roberto=1.5;
var pedro=1.7;

palitoAgua=0.6;
palitoCrema=1;
palitoHeladix=1.6;
palitoHeladovic=1.7;
palitoConfites=2.9;
cuartoKilo=2.9;
document.write("pedro:")
 if (pedro >= palitoAgua && pedro < palitoCrema){
   document.write(`te alcanza para palito de agua que sale:${palitoAgua} y tu vuelto es ${pedro-palitoAgua}`);
 }
 else if (pedro >= palitoCrema && pedro < palitoHeladix){
   document.write(`te alcanza para palito de crema que sale:${palitoCrema} y tu vuelto es ${pedro-palitoCrema}`);
 }
 else if (pedro >= palitoHeladix && pedro < palitoHeladovic ){
   document.write(`te alcanza para palito de heladix que sale:${palitoHeladix} y tu vuelto es ${pedro-palitoHeladix}`);
 }
 else if (pedro >= palitoHeladovic && pedro < palitoConfites ){
   document.write(`te alcanza para palito de heladovic que sale:${palitoHeladovic} y tu vuelto es ${pedro-palitoHeladovic}`);
 }
 else if (pedro >= palitoHeladovic){
   document.write(`te alcanza para palito de confites que sale:${palitoConfites}, tambien para un cuarto${cuartoKilo} y tu vuelto es ${pedro-palitoConfite}`);
 }
 else document.write("no te alcanza la plata")
 document.write("   Roberto: ")
 if (roberto >= palitoAgua && roberto < palitoCrema){
   document.write(`te alcanza para palito de agua que sale:${palitoAgua} y tu vuelto es ${roberto-palitoAgua}`);
 }
 else if (roberto >= palitoCrema && roberto < palitoHeladix){
   document.write(`te alcanza para palito de crema que sale:${palitoCrema} y tu vuelto es ${roberto-palitoCrema}`);
 }
 else if (roberto >= palitoHeladix && roberto < palitoHeladovic ){
   document.write(`te alcanza para palito de heladix que sale:${palitoHeladix} y tu vuelto es ${roberto-palitoHeladix}`);
 }
 else if (roberto >= palitoHeladovic && roberto < palitoConfites ){
   document.write(`te alcanza para palito de heladovic que sale:${palitoHeladovic} y tu vuelto es ${roberto-palitoHeladovic}`);
 }
 else if (roberto >= palitoHeladovic){
   document.write(`te alcanza para palito de confites que sale:${palitoConfites}, tambien para un cuarto${cuartoKilo} y tu vuelto es ${roberto-palitoConfite}`);
 }
 else document.write("no te alcanza la plata")

 document.write("   cofla: ")
 if (cofla >= palitoAgua && cofla < palitoCrema){
   document.write(`te alcanza para palito de agua que sale:${palitoAgua} y tu vuelto es ${cofla-palitoAgua}`);
 }
 else if (cofla >= palitoCrema && cofla < palitoHeladix){
   document.write(`te alcanza para palito de crema que sale:${palitoCrema} y tu vuelto es ${cofla-palitoCrema}`);
 }
 else if (cofla >= palitoHeladix && cofla < palitoHeladovic ){
   document.write(`te alcanza para palito de heladix que sale:${palitoHeladix} y tu vuelto es ${cofla-palitoHeladix}`);
 }
 else if (cofla >= palitoHeladovic && cofla < palitoConfites ){
   document.write(`te alcanza para palito de heladovic que sale:${palitoHeladovic} y tu vuelto es ${cofla-palitoHeladovic}`);
 }
 else if (cofla >= palitoHeladovic){
   document.write(`te alcanza para palito confites que sale:${palitoConfites}, tambien para un cuarto${cuartoKilo} y tu vuelto es ${cofla-palitoConfites}`);
 }
 else document.write("no te alcanza la plata");
