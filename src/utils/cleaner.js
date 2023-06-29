export const cleaner = (arrayNumbers, initialPoint) => {
  let result = arrayNumbers.filter((item, index) => {
    if (item !== '') return arrayNumbers.indexOf(item) === index;
  });
  result = result.filter((dt) => dt != initialPoint); //elimina el initial point
  return result;
};
export const cleanBorders = (arrayNumbers) => {
  let result = arrayNumbers.filter((dt) => {
    if (dt != 199 || 0) {
      return dt;
    }
  });
  return result;
};
