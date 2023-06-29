import { cleanBorders, cleaner } from './cleaner';
import { recorridoPromSum } from './resume';
import { arrayOfLabels } from './resume';
const cScan = (initialPoint, stringOfNumbers) => {
  let data = cleaner(
    Array.from(stringOfNumbers.split(','), Number),
    initialPoint
  ).sort(function (a, b) {
    return a - b;
  }); //ordena el array
  data = cleanBorders(data); //elimina 199 o 0 del array
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

  let resolvedArray = higherNumbers
    .concat([199])
    .concat([0])
    .concat(minorNumbers);
  const recorridoData = recorridoPromSum(
    [parseInt(initialPoint)].concat(resolvedArray)
  );
  return {
    res: [parseInt(initialPoint)].concat(resolvedArray),
    labelsArray: arrayOfLabels(resolvedArray),
    algorithmName: 'C-Scan',
    recorrido: [initialPoint].concat(resolvedArray).length - 1,
    sizeRecorrido: recorridoData.suma,
    prom: recorridoData.promedio,
  };
};
export default cScan;
