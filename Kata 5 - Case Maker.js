/* Task
You'll be given a string which you'll have to convert to Camel Case. Return the resulting value from your function. */
// Expected Output
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious

const camelCase = input => {
  const inputArray = input.split(' ');
  let outputArray = [inputArray[0]];
  for (i = 1; i < inputArray.length; i++) {
    let word = inputArray[i].split('');
    word[0] = word[0].toUpperCase()
    outputArray.push(word.join(''));
  }
  return outputArray.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

