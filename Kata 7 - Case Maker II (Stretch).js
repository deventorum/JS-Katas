/* Task
This an extension to the previous Case Maker kata. Create a new file (and gist) for this kata instead of updating the one from your Case Maker submission.

You'll still be given an input string to convert. However, this time, you'll also be given a casing style to work with. The following code block will describe all the casing styles to support. You may also receive an array of casing styles, and each of these should be applied.

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower */

const makeCase = (input, type) => {
  
  const vovelArray = ['a', 'e', 'i', 'o', 'u']; 
  
  const precedenceStyles = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower']
  const applyStyle = (text, style) => {
    let outputArray = [];
    const inputArray = text.split(' ');
    const letterArray = text.split('');
    switch (style) {
      case 'camel':
        outputArray = [inputArray[0]];
        for (i = 1; i < inputArray.length; i++) {
          let word = inputArray[i].split('');
          word[0] = word[0].toUpperCase()
          outputArray.push(word.join(''));
        }
        return outputArray.join('');
      case 'pascal':  
        for (i = 0; i < inputArray.length; i++) {
            let word = inputArray[i].split('');
            word[0] = word[0].toUpperCase()
            outputArray.push(word.join(''));
          }
        return outputArray.join('');
      case 'snake':  
        for (i = 0; i < inputArray.length; i++) {
          let word = inputArray[i].split('');
          outputArray.push(word.join(''));
        }
        return outputArray.join('_');
      case 'kebab': 
        for (i = 0; i < inputArray.length; i++) {
          let word = inputArray[i].split('');
          outputArray.push(word.join(''));
        }
        return outputArray.join('-');
      case 'title':  
        for (i = 0; i < inputArray.length; i++) {
          let word = inputArray[i].split('');
          word[0] = word[0].toUpperCase()
          outputArray.push(word.join(''));
        }
        return outputArray.join(' ');
      case 'vowel':      
        for (i = 0; i < letterArray.length; i++) {
          if (vovelArray.indexOf(letterArray[i]) !== -1) {
            letterArray[i] = letterArray[i].toUpperCase();
          }
          outputArray.push(letterArray[i]);
        }
        return outputArray.join('');
      case 'consonant':    
        for (i = 0; i < letterArray.length; i++) {
          if (vovelArray.indexOf(letterArray[i]) === -1) {
            letterArray[i] = letterArray[i].toUpperCase();
          }
          outputArray.push(letterArray[i]);
        }
        return outputArray.join('');
      case 'upper':
        for (i = 0; i < letterArray.length; i++) {
          letterArray[i] = letterArray[i].toUpperCase();
          outputArray.push(letterArray[i]);
        }
        return outputArray.join('');
      case 'lower':
        for (i = 0; i < letterArray.length; i++) {
          letterArray[i] = letterArray[i].toLowerCase();
          outputArray.push(letterArray[i]);
        }
        return outputArray.join('');
    }
  }
  if (typeof type === 'string') {
    return applyStyle(input, type);
  } else if (typeof type === 'object') {
    let combinedStylesOutput = input;
    for (i = 0; i < precedenceStyles.length; i++) {
      for (k = 0; k < type.length; k++) {
        if (precedenceStyles[i] === type[k]) {
          combinedStylesOutput = applyStyle(combinedStylesOutput, type[k]);
        }
      }
    }
    return combinedStylesOutput;
  }
};
makeCase("this is a string", "camel") === "thisIsAString";
makeCase("this is a string", "pascal") === "ThisIsAString";
makeCase("this is a string", "snake") === "this_is_a_string";
makeCase("this is a string", "kebab") === "this-is-a-string";
makeCase("this is a string", "title") === "This Is A String";
makeCase("this is a string", "vowel") === "thIs Is A strIng";
makeCase("this is a string", "consonant") === "THiS iS a STRiNG";
makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING";