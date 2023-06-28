import { cleaner } from './cleaner';
import { recorridoPromSum, arrayOfLabels } from './resume';

const cLook = (initialPoint, stringOfNumbers) => {
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
  let resolvedArray = higherNumbers.concat(minorNumbers);
  const recorridoData = recorridoPromSum(
    [parseInt(initialPoint)].concat(resolvedArray)
  );
  return {
    res: [parseInt(initialPoint)].concat(resolvedArray),
    labelsArray: arrayOfLabels(resolvedArray),
    algorithmName: 'C-Look',
    recorrido: [initialPoint].concat(resolvedArray).length-1,
    sizeRecorrido: recorridoData.suma,
    prom: recorridoData.promedio,
  };
};
export default cLook;
