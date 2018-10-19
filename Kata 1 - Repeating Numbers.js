var repeatNumbers = function(data) {
  
  let outputArray = [];
  let outputString = '';
  let totalString = '';
  for (let i = 0; i < data.length; i++) {
    let counter = 0;
    while (counter < data[i][1]) {
      outputArray.push(data[i][0]);
      counter++
    }
    outputString = outputArray.join('');
    if (totalString === '') {
      totalString = outputString;
    } else {
      totalString += ', ' + outputString;
    }
    outputArray = [];
  }
  return totalString;
};
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));