const conditionalSum = (values, condition) => {
  let totalSum = 0;
  switch (condition) {
    case 'even':
      for (let i = 0; i < values.length; i += 1) {
        if (values[i] % 2 === 0) {
          totalSum += values[i];
        }
      }
      break;
    case 'odd':
      for (let i = 0; i < values.length; i += 1) {
        if (values[i] % 2 !== 0) {
          totalSum += values[i];
        }
      }
      break;
    default:
      return 0;
  }
  return totalSum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));
