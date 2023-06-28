import { cleaner } from './cleaner';
import { recorridoPromSum, arrayOfLabels } from './resume';
const look = (initialPoint, stringOfNumbers, option) => {
  let data = cleaner(stringOfNumbers.split(',')).sort(function (a, b) {
    return a - b;
  }); //ordena el array
  data = data.map((data) => parseInt(data)); //convierte a numero
  let minorNumbers = data.filter((dt) => {
    if (dt < initialPoint) {
      return parseInt(dt);
    }
  }); //filtra los numeros menores

  let higherNumbers = data.filter((dt) => {
    if (dt > initialPoint) {
      return parseInt(dt);
    }
  }); //filtra los números mayores

  let resolvedArray = null;
  if (option == 'right') {
    resolvedArray = higherNumbers.concat(minorNumbers.reverse());
  } else if (option == 'left') {
    resolvedArray = minorNumbers.reverse().concat(higherNumbers);
  }
  const recorridoData = recorridoPromSum(
    [parseInt(initialPoint)].concat(resolvedArray)
  );
  return {
    res: [parseInt(initialPoint)].concat(resolvedArray),
    labelsArray: arrayOfLabels(resolvedArray),
    algorithmName: 'Look',
    recorrido: [initialPoint].concat(resolvedArray).length-1,
    sizeRecorrido: recorridoData.suma,
    prom: recorridoData.promedio,
  };
};
export default look;
