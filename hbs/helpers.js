/**============================================================
 * WEB SERVERS - REGISTRO DE HELPERS
=============================================================*/
// INSTANCIA PARA HBS
const hbs = require('hbs');
/**HELPERS HBS
 * Un helper es un funcion que se dispara cuando el template
 * lo requiera.
 */
hbs.registerHelper('getFecha', () => {

  return new Date().getFullYear();

})
hbs.registerHelper('capitalizar', (text) => {
  // TOMAR LAS PALABRAS POR ESPACIO / CREAR ARRAY
  let palabras = text.split(' ');
  // RECORRER LA PALABRA, PONER EN MAYUZCULA SU PRIMERA LETRA
  palabras.forEach((palabra, index)=>{
    palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });
  // retornar las palabras unidas con un espacio
  return palabras.join(' ');      
})