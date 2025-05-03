//********************************************** */ TEORIA
//*** FUNCIONES EXPERESADAS */

/* En una función expresada, defines una función en una variable por lo que la función solo está disponible para hacer llamada despues de haber sido definida
 Las funciones expresadas son utiles en:

  1.- Callbacks
  2.- Funciones Anonimas
  3.- Clausuras (Closures)
        Son funciones que capturan variables en sus entorno circundante
        esto puede ser útil para crear funciones que mantienen un estado interno
  4.- Asignación Dinámica
        Sirve para que puedas asignar fuciones expresadas a variables en tiempo de 
        ejecución, lo que te permite cambiar "que funcion se ejecutará en función de las
        condiciones del programa."

  __________________________
  
  ARROW FUNCTION
        Es una nueva forma de declarar "Funciones Anonimas Expresadas" creadas en el 2015
  */

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
 * Toda funcion tiene un RETURN implicito aunque no esté escrito.
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
// ( () => {
//     console.log('Hola mundo por 2');
// } )()

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

/** Existen funciones declaradas y expresadas( dentro de una variable) **/
/** Esta es una función declarada, esta función puede ser ejecutada antes de su declaración */

// saludar("xavi");
// function saludar(name) {
//     console.log(`Mi nombre es "${name}"`);
// }

/*** FUNCIONES EXPRESADAS */
/** Esto es una función expresada, es una función anonima dentro de una variable, se puede ejecutar unicamente despues
 *  de ser declarada */
// let saludar = function (name) {
//     console.log(`Mi nombre es (de función expresada)"${name}"`);
// }
// saludar("rick");

// let funcion_return = function () {

//     console.log('uno');
//     console.log('dos');
//     console.log('tres');
//     return 'Esto es el return';
// }

// let ejecuta = funcion_return;
// console.log(typeof(ejecuta)); // Esto es el return


// /*** FUNCION ANOIMA AUTOEJECUTABLE */
// /** Función que retona una función autoejecutable */
// let autoEjecutable = () => {
//     console.log('Hola mundo por 1');

//     return (function () {
//         console.log('Hola mundo por 2');
//         return 0; // el tipo de dato es un number, aunque se crea que está implicito (undefined)
//     })(); // parentesis necesarios para ejecutar la función interna, puede o no llevar el ;.
// }

// let variable = autoEjecutable(); // quitando parentesis no se ejecuta la función por lo tanto es un tipo de dato function,
// //  si se ejecuta la función el tipo de cambio es el que esté despues del return.
// console.log(typeof(variable)); // ejecuta la funcion anonima autoejecutable y a su vez muestra el contenido del return

/** Función que retona una función anónima */
// (() => {
//     console.log('Hola Mundo'); // Tambien es una función anonima sin necesidad de nombre.
// })();

// /**** FUNCION EXPRESADA (CLOSURE) */
// ex.
// function contador() {
//     let count = 0;
//     return function () {
//         return ++count;
//     }   
// }

// let incrementar = contador();
// console.log(incrementar());
// console.log(incrementar());

// /**** FUNCION EXPRESADA (ASIGNACION DINÁMICA) */
//ex.
// let operacion;

// if (true) {
//     operacion = function (a, b) {
//         return a + b;
//     }
// } else {
//     operacion = function (a, b) {
//         return a * b;
//     }
// }
// console.log(operacion(2,4))

/*** FUNCION FLECHA (Expresadas) */
// let saludar = () => {
//     console.log('Nombre 1')
// }
// saludar()

// let saludar = () => console.log('Nombre 2')
// saludar()

// let saludar = (param) => console.log(param)
// saludar('Nombre 3')

// let saludar = param => console.log(param)
// saludar('Nombre 4')

// let sumar = (a, b) => {
//     return a + b
// }
// console.log(sumar(1,2))

// let sumar = (a, b) => a + b
// console.log(sumar(3,4))

// /** FUNCION QUE RETORNA UN OBJETO (que contiene una funcion en su return) */
// let crearObjeto = (nombre, edad) => {
//       return {
//             nombre, // codigo resumido de nombre: nombre,
//             edad,   // codigo resumido de edad: edad,
//             imprimir() {
//                   return `Mi nombre es: ${nombre} y mi edad es: ${edad}` 
//             }
//       }
// }

// console.log(crearObjeto('Gato',300).imprimir())

// /** IMPRIMIR UN VALOR PRE-DEFINIDO */
// function saludar(nombre) {
//       nombre = nombre || 'desconocido' // en caso de no encontrar la primera opción imprime la segunda
//       console.log(`Hola mi nombre es ${nombre}`)
// }
// saludar()

// /*** Esto es una mala práctica, no se debe guardar la ejecución dentro de una variable
//  */
// let name = (nombre) => {
//       console.log(nombre)
//       //aquí existe un return implicito aunque no lo escriba.
//       return nombre
// }
// let box = name('Bob Esponja') // NO CREAR variables ni almacenar la ejecución de la función.
// console.log(box)

// /*** RESUMIR UN OBJETO SIENDO EJECUTADO DENTRO DE UNA FUNCIÓN ***/
// let persona = (nombre, apellido) => ({nombre, apellido})
// console.log(persona('Nombre001','Apellido001'))

/*** INICIALIZAR PARAMETRO */
// let saludar = (param = 'visitante') => {
//  return `Hola ${param}` 
//  }
// console.log(saludar())

/*** LAS 4 TIPOS DE FUNCIONES ANONIMAS AUTOEJECUTABLES */
/** 1.- CLASICA */
      // (function() {
      //       console.log("Soy una función anónima autoejecutable CLASICA");
      // })();
      
/** 2.- CROCKFORD */
      // ((function() {
      //       console.log("Soy una función anónima autoejecutable CROCKFORD");
      // })());

/** 3.- UNARIA */
      // +function() {
      //       console.log("Soy una función anónima autoejecutable UNARIA");
      // }();

/** 4.- FACEBOOK */
      // !function() {
      //       console.log("Soy una función anónima autoejecutable ESTILO FACEBOOK");
      // }();

