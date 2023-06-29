import { cleaner } from './cleaner';
import { recorridoPromSum } from './resume';
import { arrayOfLabels } from './resume';
const fcfs = (initialPoint, stringOfNumbers) => {
  let data = cleaner(
    Array.from(stringOfNumbers.split(','), Number),
    initialPoint
  );
  let resolvedArray = data;
  const recorridoData = recorridoPromSum(
    [parseInt(initialPoint)].concat(resolvedArray)
  );
  return {
    res: [parseInt(initialPoint)].concat(resolvedArray),
    labelsArray: arrayOfLabels(resolvedArray),
    algorithmName: 'FCFS',
    recorrido: [initialPoint].concat(resolvedArray).length - 1,
    sizeRecorrido: recorridoData.suma,
    prom: recorridoData.promedio,
  };
};
export default fcfs;
