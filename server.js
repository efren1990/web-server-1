/**============================================================
 * WEB SERVERS - SERVIDOR DE SERVICIOS WEB - EXPRESS
=============================================================*/
// IMPORTAR PAQUETE EXPRESS
const express = require('express');
// INSTANCIAR EXPRESS
const app = express();
// INSTANCIA PARA HBS
const hbs = require('hbs');
// ARCHIVO DE HELPERS
require('./hbs/helpers');
// VARIABLES GLOBALES
/**el objeto
 * evn.PORT en local no existira, por ende pasara el 3000
 * puerto por donde saldra la aplicacion, el objeto funcionara
 * en Despliegue
 */
const port = process.env.PORT || 3000;
/**MIDLEWARE
* Es una instruccion o un callback que se va a ejecutar siempre
no importa que url la persona pida. 
*/
// Permite que un contenido sea publico
app.use(express.static( __dirname + '/public'))

// HELPERS PARTIAL - FRAGMENTOS DE CODIGO REUTILIZABLES, DEFINIR CARPETA DE HELPERS
hbs.registerPartials(__dirname + '/views/parciales');


// Express HBS engine - motor de templates
app.set('view engine', 'hbs'); 

//RENDERIZAR EL TEMPLATE ENGINE HBS CON EL CONTENIDO HTML - a0 l llamado de ruta /
app.get('/', (req, res) => {

  // RENDERIZAR EL ARCHIVO DENTRO DE LA CARPETA views - home.hbs
  /**Se pueden pasar variables en el renderizado que pueden
   * ser usadas en la vista con los dobles corchetes
   */
  res.render('home', {
    nombre: 'all capone'
  });
})

// RUTA PARA LA PAGINA ABOUT
app.get('/about', (req, res) => {
  // RENDERIZADO
  res.render('about');
})
// PUERTO
app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`)
});
