// cadena de textp (string)
var nombre = "ellis";
var apellido = "velandia";

console.log(nombre, apellido);

String = "cadena de texto";

// variable booleano

booleano = false || true;

var equipo1 = "2";
var equipo2 = "4";

console.log(equipo2 < equipo1);
console.log(equipo2 > equipo1);
console.log(equipo1 == equipo2);

// variable numero + operadores

var edad1 = 15;
var edad2 = 14;
var edad3 = 20;

var resultado = edad3 + edad3;

console.log(resultado);

console.log(edad1 + edad2);
console.log(edad3 / edad1);
console.log(edad2 * edad1);
console.log(edad3 - edad2);

// variable objeto

var perro = { nombre: "kaiser", edad: 1, vivo: true };

console.log(perro.vivo);
console.log(perro.edad);
console.log(perro.nombre);

// arrays

var dias = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
var diaSeleccionado = dias[0];
var otroDia = dias[5];

console.log(dias[0]);

var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
console.log(meses[0]);
console.log(meses[4]);

// negaciones

var cantidad = 0;
vacio = !cantidad;

console.log(vacio);

cantidad = 2;
vacio = !cantidad;

console.log(vacio);

var mensaje = "";
mensajeVacio = !mensaje;

console.log(mensajeVacio);

mensaje = "Bienvenido";
mensajeVacio = !mensaje;

console.log(mensajeVacio);

// // falsys
var a = false;
var b = 0;
var c = "";

console.log(a == b);
console.log(b == c);
console.log(a == c);

// operadores and y or

var valor1 = true;
var valor2 = false;
resultado = valor1 && valor2;

console.log(resultado);

valor1 = true;
valor2 = true;
resultado = valor1 && valor2;

console.log(resultado);

var valor1 = true;
var valor2 = false;
resultado = valor1 || valor2;

console.log(resultado);

valor1 = false;
valor2 = false;
resultado = valor1 || valor2;

console.log(resultado);

// comparadores

var numero = 1;
var string = "Hola";

console.log(1 == 1);
console.log("Hola" == "Hola");

var num = 0;
var obj = "0";
var str = "0";
var b = false;

console.log(num !== num);
console.log(obj != obj);
console.log(str === str);
