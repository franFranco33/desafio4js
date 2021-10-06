const COTIZACION_BITCOIN = 10000000;
const cotizarBitcoin = (pesos) => pesos / COTIZACION_BITCOIN;
const cotizarPesos = (bitcoin) => bitcoin * COTIZACION_BITCOIN;
let seleccion = prompt("Seleccionar cotización \n 1 - BITCOIN A PESOS \n 2 - PESOS A BITCOIN ");
let valor = prompt("Valor");
switch (seleccion) {
    case "1":
        alert("$" + cotizarPesos(valor));
        break;
    case "2":
        alert(cotizarBitcoin(valor) + "BTC");
        break;
    default:
        break;
}