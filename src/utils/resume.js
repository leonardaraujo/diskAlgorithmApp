export const recorridoPromSum = (array) => {
  let auxiliarSumar = 0;
  for (let index = 0; index < array.length - 1; index++) {
    auxiliarSumar += Math.abs(array[index] - array[index + 1]);
  }
  return { suma: auxiliarSumar, promedio:( auxiliarSumar / array.length).toFixed(2)};
};

export const arrayOfLabels = (array) => {
  let labelNumbersArray = [];
  for (let index = 0; index <= array.length; index++) {
    labelNumbersArray.push(index.toString());
  }
  return labelNumbersArray;
};
