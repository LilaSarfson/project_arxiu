export function includesFunction  (data, property, name) {
    const filteredData = data.filter((item) =>
    item[property].toLowerCase().includes(name.toLowerCase()))
    return filteredData
}

export function filterFunction  (data, property, parameter) {
    const filteredData = data.filter((e) => e[property] === parameter);
    return filteredData
}

export function refreshPage (){
    location.reload();
}
export function UpperCaseFirsrtLetter (cadena) {
    return cadena ? cadena.charAt(0).toUpperCase() + cadena.slice(1) : cadena;
  }


