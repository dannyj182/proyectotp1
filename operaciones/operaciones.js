import fs from "fs";

export const leerArchivoComoString = (ruta, formato) => {
  let datos = "";
  try {
    datos = fs.readFileSync(ruta, formato);
  } catch (error) {
    console.log(`Error leyendo archivo: ${error.message}`);
  }
  return datos;
}

export const escribirTextoEnArchivo = (ruta, texto, flag) => {
  if (fs.existsSync(ruta)) {
    fs.writeFileSync(ruta, texto);
  } else {
    if (flag) {
      fs.appendFileSync(ruta, texto);
    } else {
      throw Error(`el archivo no existe`);
    }
  }
}

export const transformarStringEnArrayDeNumeros = (texto, separador) => {
    let arreglo = texto.split(separador)
    arreglo = arreglo.map(item => Number(item))
    //Se usó el mismo arreglo ya que no es necesario aplicar inmutabilidad
    arreglo = arreglo.filter( item => !isNaN(item) )
    return arreglo
}

export const transformarArrayDeNumerosAUnSoloString = (arreglo, separador) => {
    let texto = arreglo.reduce((valorAnterior, valorActual) => valorAnterior + separador + valorActual)
    return texto
}

export const combinarDosArrays = (arreglo01, arreglo02) => {
    let nuevoArreglo = arreglo01.concat(arreglo02)
    nuevoArreglo = nuevoArreglo.filter((item, index) => nuevoArreglo.indexOf(item) === index)
    nuevoArreglo = nuevoArreglo.sort((a, b) => a - b)
    return nuevoArreglo
}

export const combinarNArrays = arreglo => {
    let nuevoArreglo = arreglo.flat()
    nuevoArreglo = nuevoArreglo.sort((a, b) => a - b)
    return nuevoArreglo
}