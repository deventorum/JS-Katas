/* Task
You'll be given a number, this is the highest value of your multiplication table. Your job is to generate a multiplication table for the values from 1 to the provided value.

Each cell should have the same size, as well as at least 1 space of padding around each value.

Your function should be called multiplicationTable and it should return a string for the multiplication table output. Do not use console.log inside the function. */
const multiplicationTable = maxValue => {
  let output = '' 
  const numberOfDigits = (maxValue * maxValue).toString().length
  const horizontalLine = () => {
    const dash = '-'
    const upperBorder = (dash.repeat(numberOfDigits + 2) + '+').repeat(maxValue);
    const string = '+' + upperBorder;
    return string;
  }
  const standInsertion = () => {
    return output += horizontalLine() + '\n';
  }
  standInsertion();
  output += '|'
  for (i = 1; i <= maxValue; i++) {
    for (k = 1; k <= maxValue; k++) {
      let padding = ' '.repeat(numberOfDigits + 1 - (i * k).toString().length)
      output += ` ${i * k}${padding}|`;
    }
    output += '\n';
    standInsertion();
    if (i !== maxValue) {
      output += '|'
    }
  }
  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
console.log(multiplicationTable(15));