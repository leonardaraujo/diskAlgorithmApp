import { cleaner } from './cleaner';
import { recorridoPromSum } from './resume';
import { arrayOfLabels } from './resume';
const scan = (initialPoint, stringOfNumbers, direction) => {
  let data = cleaner(
    Array.from(stringOfNumbers.split(','), Number),
    initialPoint
  ).sort(function (a, b) {
    return a - b;
  }); //ordena el array
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
  if (direction == 'left') {
    resolvedArray = minorNumbers.reverse().concat([0]).concat(higherNumbers);
  } else if (direction == 'right') {
    resolvedArray = higherNumbers.concat([199]).concat(minorNumbers.reverse());
  }
  const recorridoData = recorridoPromSum(
    [parseInt(initialPoint)].concat(resolvedArray)
  );
  return {
    res: [parseInt(initialPoint)].concat(resolvedArray),
    labelsArray: arrayOfLabels(resolvedArray),
    algorithmName: 'Scan',
    recorrido: [initialPoint].concat(resolvedArray).length - 1,
    sizeRecorrido: recorridoData.suma,
    prom: recorridoData.promedio,
  };
};
export default scan;
