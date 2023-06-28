export const cleaner = (arrayNumbers) => {
  let result = arrayNumbers.filter((item, index) => {
    if (item !== '') return arrayNumbers.indexOf(item) === index;
  });
  return result;
};
