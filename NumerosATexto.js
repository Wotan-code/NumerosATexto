const convertir = () => {
  //Entrada
  let numero = document.getElementById("numero").value;
  let moneda = document.getElementById("moneda").value;
  let minusculas = document.getElementById("minusculas").checked;

  //Salida
  let salida = document.getElementById("salida");

  if (numero.split() != "" && !isNaN(numero)) {
    minusculas
      ? (salida.innerHTML = (numeroATexto(numero) + moneda).toLowerCase())
      : (salida.innerHTML = numeroATexto(numero) + moneda);
  } else {
    salida.innerHTML = "Debes ingresar un numero";
  }
};

const numeroATexto = (numero) => {
  if (numero.length == 1) {
    return (numero = "0" ? "CERO" : unidades(parseInt(numero)));
  }
  if (numero.length == 2) {
    return decenas(parseInt(numero));
  }
  if (numero.length == 3) {
    return centenas(parseInt(numero));
  }
  if (numero.length >= 4 && numero.length <= 6) {
    return millares(parseInt(numero));
  }
  if (numero.length >= 7 && numero.length <= 12) {
    return millones(parseInt(numero));
  }
  return "😁 Te toca continuar a ti con los billones 😁";
};

const unidades = (numero) => {
  switch (numero) {
    case 1:
      return "UN";
    case 2:
      return "DOS";
    case 3:
      return "TRES";
    case 4:
      return "CUATRO";
    case 5:
      return "CINCO";
    case 6:
      return "SEIS";
    case 7:
      return "SIETE";
    case 8:
      return "OCHO";
    case 9:
      return "NUEVE";
    default:
      return "";
  }
};

const decenas = (numero) => {
  decena = Math.floor(numero / 10);
  unidad = numero - decena * 10;
  switch (decena) {
    case 1:
      switch (unidad) {
        case 0:
          return "DIEZ";
        case 1:
          return "ONCE";
        case 2:
          return "DOCE";
        case 3:
          return "TRECE";
        case 4:
          return "CATORCE";
        case 5:
          return "QUINCE";
        default:
          return "DIECI " + unidades(unidad);
      }
    case 2:
      return unidad == 0 ? "VEINTE" : "VEINTI" + unidades(unidad);
    case 3:
      return unidad == 0 ? "TREINTA" : "TREINTA Y " + unidades(unidad);
    case 4:
      return unidad == 0 ? "CUARENTA" : "CUARENTA Y " + unidades(unidad);
    case 5:
      return unidad == 0 ? "CINCUENTA" : "CINCUENTA Y " + unidades(unidad);
    case 6:
      return unidad == 0 ? "SESENTA" : "SESENTA Y " + unidades(unidad);
    case 7:
      return unidad == 0 ? "SETENTA" : "SETENTA Y " + unidades(unidad);
    case 8:
      return unidad == 0 ? "OCHENTA" : "OCHENTA Y " + unidades(unidad);
    case 9:
      return unidad == 0 ? "NOVENTA" : "NOVENTA Y " + unidades(unidad);
    default:
      return unidades(unidad);
  }
};

const centenas = (numero) => {
  let centena = Math.floor(numero / 100);
  let decena = numero - centena * 100;
  switch (centena) {
    case 1:
      return decena == 0 ? "CIEN" : "CIENTO " + decenas(decena);
    case 2:
      return decena == 0 ? "DOSCIENTOS" : "DOSCIENTOS " + decenas(decena);
    case 3:
      return decena == 0 ? "TRESCIENTOS" : "TRESCIENTOS " + decenas(decena);
    case 4:
      return decena == 0 ? "CUATROCIENTOS" : "CUATROCIENTOS " + decenas(decena);
    case 5:
      return decena == 0 ? "QUINIENTOS" : "QUINIENTOS " + decenas(decena);
    case 6:
      return decena == 0 ? "SEISCIENTOS" : "SEISCIENTOS " + decenas(decena);
    case 7:
      return decena == 0 ? "SETECIENTOS" : "SETECIENTOS " + decenas(decena);
    case 8:
      return decena == 0 ? "OCHOCIENTOS" : "OCHOCIENTOS " + decenas(decena);
    case 9:
      return decena == 0 ? "NOVECIENTOS" : "NOVECIENTOS " + decenas(decena);
    default:
      return decenas(decena);
  }
};

const millares = (numero) => {
  let millar = Math.floor(numero / 1000);
  let centena = numero - millar * 1000;
  return millar > 0
    ? centenas(millar) + " MIL " + centenas(centena)
    : centenas(centena);
};

const millones = (numero) => {
  let millon = Math.floor(numero / 1000000);
  let millar = numero - millon * 1000000;
  if (millon == 1) {
    return "UN MILLON " + millares(millar);
  }
  if (millon < 1000) {
    return centenas(millon) + " MILLONES " + millares(millar);
  }
  return millares(millon) + " MILLONES " + millares(millar);
};
