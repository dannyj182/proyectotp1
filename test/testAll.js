import * as operaciones from '../operaciones/operaciones.js'

console.log("<-------------Función: leerArchivoComoString-------------->")
console.log( operaciones.leerArchivoComoString('./texto.txt', 'utf-8') )

console.log("<-------------Función: escribirTextoEnArchivo------------->")
try{
    operaciones.escribirTextoEnArchivo('./texto.txt','Agregando texto...\n', true)
    console.log( operaciones.leerArchivoComoString('./texto.txt', 'utf-8') )
}catch(error){
    console.log(`Error: ${error.message}`)
}

console.log("<--------Función: transformarStringEnArrayDeNumeros------->")
let texto = '123 | 456 | 789 | 1bc | 10'
let separador = ' | '
let arreglo = operaciones.transformarStringEnArrayDeNumeros(texto, separador)
console.log("Texto original: " + texto);
console.log(arreglo);

console.log("<-----Función: transformarArrayDeNumerosAUnSoloString----->")
texto = operaciones.transformarArrayDeNumerosAUnSoloString(arreglo, ',')
console.log(`El String resultante es: ${texto}`);

console.log("<--------Función: combinarDosArrays-------->")
const arreglo1 = [1, 5, 10, 11, 3]  // Se agregaron elementos repetidos para probar que
const arreglo2 = [2, 3, 8, 11]      // el nuevo arreglo no tenga elementos repetidos
console.log(arreglo1);
console.log(arreglo2);
console.log(operaciones.combinarDosArrays(arreglo1, arreglo2))

console.log("<--------Función: combinarNArrays-------->")
const arreglo3 = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]
console.log(arreglo3);
console.log(operaciones.combinarNArrays(arreglo3))
console.log(`No se por que el resultado de las últimas dos 
funciones hubo salto de línea en los corchetes`);