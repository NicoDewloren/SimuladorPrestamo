alert("BIENVENIDO A PRESTAMOS NIKITO");

// Entrada de datos ///

let nombre = prompt("Ingrese su nombre : ");
let apellido = prompt("Ingrese su apellido : ");
let dni = prompt("Ingrese su DNI : ");
let anio_nacimiento = prompt("Ingrese su año de nacimiento : ");
let sexo = prompt("Ingrese su sexo : ");
let situacion_laboral = prompt(
  "Ingrese su situacion laboral (publico/privado) : "
);
let prestamo = prompt("Ingrese el monto deseado : ");
let cant_cuotas = prompt("En cuantas cuotas desea pagar su prestamo? (3/6/12)");
let interes_situacion_laboral;
let interes_cant_cuotas;

// Procesamiento de datos ///

//VALIDACION CAMPO NOMBRE

if (nombre == "" || nombre == null) {
  let mensaje = "Por favor, debes  ingresar tu nombre.";
  console.log(mensaje);
  alert(mensaje);
  nombre = prompt("Ingrese su nombre : ");
}

console.log("Nombre: " + nombre);

//VALIDACION CAMPO APELLIDO

if (apellido == "" || apellido == null) {
  let mensaje = "Por favor, debes  ingresar tu apellido.";
  console.log(mensaje);
  alert(mensaje);
  apellido = prompt("Ingrese su apellido : ");
}

console.log("Apellido: " + apellido);

// VALIDACION CAMPO DNI

dni = parseInt(dni.replace(".", "").replace(".", ""));

if (dni == null) {
  let mensaje = "Por favor, debes  ingresar tu DNI.";
  console.log(mensaje);
  alert(mensaje);
  dni = prompt("Ingrese su DNI : ");
} else if (dni < 10000000 || dni > 100000000) {
  let mensaje = "Por favor, debes  ingresar un DNI valido.";
  console.log(mensaje);
  alert(mensaje);
  dni = prompt("Ingrese su DNI : ");
}

console.log("DNI: " + dni);

//VALIDACION CAMPO NACIMIENTO

anio_nacimiento = parseInt(anio_nacimiento.replace(".", ""));

if (anio_nacimiento == "" || anio_nacimiento == null) {
  let mensaje = "Por favor, debes  ingresar tu año de nacimiento.";
  console.log(mensaje);
  alert(mensaje);
  apellido = prompt("Ingrese su año de nacimiento : ");
} else if (anio_nacimiento > 2004) {
  let mensaje = "Por favor, debes  ser mayor de 18 años.";
  console.log(mensaje);
  alert(mensaje);
  apellido = prompt("Ingrese su año de nacimiento : ");
}

console.log("Año de nacimiento : " + anio_nacimiento);

//VALIDACION CAMPO SEXO

sexo = sexo.toLowerCase();

if (sexo == "" || sexo == null) {
  let mensaje = "Por favor, debes  ingresar tu sexo.";
  console.log(mensaje);
  alert(mensaje);
  apellido = prompt("Ingrese su sexo : ");
} else if (sexo != "masculino" && sexo != "femenino") {
  sexo = "No binario";
}

console.log("Sexo : " + sexo);

//VALIDACION CAMPO SITUACION LABORAL

situacion_laboral = situacion_laboral.toLocaleLowerCase();

if (situacion_laboral == "" || situacion_laboral == null) {
  let mensaje = "Por favor, debes  ingresar tu situacion laboral.";
  console.log(mensaje);
  alert(mensaje);
  situacion_laboral = prompt("Ingrese su situacion laboral : ");
} else if (situacion_laboral == "publico") {
  interes_situacion_laboral = 10;
} else if (situacion_laboral == "privado") {
  interes_situacion_laboral = 15;
} else {
  interes_situacion_laboral = 20;
}

console.log(
  "Situacion laboral: " +
    situacion_laboral +
    " Interes: " +
    interes_situacion_laboral
);

// VALIDACION CAMPO PRESTAMO

prestamo = parseFloat(prestamo.replace(".", "").replace(".", ""));

if (prestamo == null) {
  let mensaje = "Por favor, debes  ingresar tu monto deseado.";
  console.log(mensaje);
  alert(mensaje);
  dni = prompt("Ingrese su monto deseado : ");
} else if (prestamo < 10000 || prestamo > 500000) {
  let mensaje = "Por favor, debes  ingresar un monto entre 10.000 y 500.000";
  console.log(mensaje);
  alert(mensaje);
  prestamo = prompt("Ingrese su monto deseado: ");
}

console.log("Prestamo: " + prestamo);

//VALIDACION CAMPO CANTIDAD CUOTAS

if (cant_cuotas == "" || cant_cuotas == null) {
  let mensaje = "Por favor, debes  ingresar la cantidad de cuotas.";
  console.log(mensaje);
  alert(mensaje);
  situacion_laboral = prompt("Ingrese la cantidad de cuotas (3/6/12): ");
} else if (cant_cuotas == 3 && cant_cuotas < 6) {
  interes_cant_cuotas = 10;
} else if (cant_cuotas >= 6 && cant_cuotas < 12) {
  interes_cant_cuotas = 20;
} else {
  interes_cant_cuotas = 30;
}

console.log(
  "Cantidad de cuotas : " + cant_cuotas + " Interes: " + interes_cant_cuotas
);

// Calculo de prestamo

let calculo_interes_situacion_laboral =
  (prestamo * interes_situacion_laboral) / 100;
let calculo_interes_cant_cuotas = (prestamo * interes_cant_cuotas) / 100;
let calculo_prestamo =
  prestamo + calculo_interes_situacion_laboral + calculo_interes_cant_cuotas;
let calculo_prestamo_cuotas = calculo_prestamo / cant_cuotas;

console.log(calculo_interes_situacion_laboral);
console.log(calculo_interes_cant_cuotas);
console.log(calculo_prestamo);
console.log(calculo_prestamo_cuotas);

// Salida de datos
let salida = "Nombre: " + nombre + "\n";
salida += "Apellido: " + apellido + "\n";
salida += "DNI: " + dni + "\n";
salida += "Año nacimiento: " + anio_nacimiento + "\n";
salida += "Sexo: " + sexo + "\n";
salida += "Situacion laboral: " + situacion_laboral + "\n";
salida += "Prestamo solicitado: " + prestamo + "\n";
salida += "Total a pagar : " + calculo_prestamo.toFixed(2) + "\n";
salida += "Cantidad de cuotas: " + cant_cuotas + "\n";
salida += "Valor de las cuotas: " + calculo_prestamo_cuotas.toFixed(2) + "\n";
alert(salida);
