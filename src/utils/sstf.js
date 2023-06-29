import { recorridoPromSum } from './resume';
import { cleaner } from './cleaner';
import { arrayOfLabels } from './resume';
function calculatedifference(request, head, diff) {
  for (let i = 0; i < request.length; i++) {
    diff[i][0] = Math.abs(head - request[i]);
  }
}

function findMIN(diff, le) {
  let index = -1;
  let minimum = 1e9;

  for (let i = 0; i < le; i++) {
    if (!diff[i][1] && minimum > diff[i][0]) {
      minimum = diff[i][0];
      index = i;
    }
  }
  return index;
}

function sstf(head, request) {
  let initial = head;
  let clean = cleaner(Array.from(request.split(','), Number), head);

  let diff = new Array(clean.length);
  for (let i = 0; i < clean.length; i++) {
    diff[i] = new Array(2);
  }

  let seeksequence = new Array(clean.length + 1);
  seeksequence[0] = head;

  for (let i = 0; i < clean.length; i++) {
    calculatedifference(clean, head, diff);
    let index = findMIN(diff, clean.length);
    diff[index][1] = 1;
    head = clean[index];
    seeksequence[i + 1] = head;
  }
  let arrLabels = arrayOfLabels(seeksequence);
  arrLabels.pop()
  const recorridoData = recorridoPromSum(seeksequence);
  return {
    res: seeksequence,
    labelsArray: arrLabels,
    algorithmName: 'SSTF',
    recorrido: seeksequence.length - 1,
    sizeRecorrido: recorridoData.suma,
    prom: recorridoData.promedio,
  };
}
export default sstf;
