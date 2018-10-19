const calculateChange = (total, cash) => {
  let change = cash - total;
  if (change < 0) {
    return `Hey! This is not enough!`
  }

  let finalResult = {};

  const arrayDenomination = Object.entries({
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  }) // Denomination values are stored inside an object converted into array  

  const calculateDenomination = (amount, value) => {
    count = 0
    while ((amount / value) >= 1) {
      amount -= value;
      count += 1;
    }
    return count;
  }

  let typeDenom, valueDenom;

  for (i = 0; i < arrayDenomination.length; i += 1) {
    
    typeDenom = arrayDenomination[i][0];
    valueDenom = arrayDenomination[i][1];

    if ((change / valueDenom) >= 1) {
      finalResult[typeDenom] = calculateDenomination(change, valueDenom);
    }
    
    change -= calculateDenomination(change, valueDenom) * valueDenom;
  }

  return finalResult;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/* Expected Output
{ twoDollar: 1, dime: 1, penny: 3 }
{ ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
 */