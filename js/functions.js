//

// function saludar(name) {
//     console.log(`Mi nombre es "${name}"`);
// }

// saludar("xavi");

// function suma(a, b, c) {
//     console.log(`suma:  ${a + b + c}`);
// }

// suma(1, 2, 5);

// FUNCIONES Flecha (Arrow functions):

// let saludar = (name, age) => {
//     console.log(`Hola mi nombre es, ${name}`);
// }

// saludar("xavi", 31);

/**
 * 
 * Toda funcion tiene un return implicito aunque no esté escrito.
 */
// function ejecutar() {
//    console.log('Hola mundo');  
//    return 'Hello world';
// }
//------------------------------------------------------------------------------------
// function ejecutar() {
//    console.log('Hola mundo');  // Toda funcion tiene un return implicito aunque no esté escrito.
//    return 'Hello world';
// }

// // let caja = ejecutar(); // ejecución de la función ejecutar() que arroja un string
// let caja = ejecutar;   // función sin ejecutarse
// console.log(typeof(caja)); // Hello world

//-----------------------------------------------------------------------------------
/** FUNCION FLECHA ANONIMA **/
( () => {
    console.log('Hola mundo por 2');
} )()

// En esta libreria podemos observar un ejemplo muy práctico de una función flecha anónima
// que se ejecuta de manera inmediata. La función flecha anónima es una función que no tiene un nombre como tal
// pero ayuda para encapsular un gran grupo de funciones
// https://code.jquery.com/jquery-3.7.1.js

/** JSON **/
// JSON (JavaScript Object Notation) es un formato de texto ligero para datos que sirve para intercambiar información
// entre aplicaciones web y servicios web. Es similar a XML pero más ligero y se le puede dar un formato fácil
// con la siguiente extensión de google chrome:
// https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?pli=1

/** CODIGOS DE ESTADO DE RESPUESTA HTTP **/
// Es una lista de los estados más comunes que podemos encontrar en los enlaces web.
// https://developer.mozilla.org/es/docs/Web/HTTP/Status