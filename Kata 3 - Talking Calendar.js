const talkingCalendar = date => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const month = months[parseInt(date.slice(5, 7)) - 1];

  const year = date.slice(0, 4);

  const dayNumber = parseInt(date.slice(8, 10));

  let day, suffix;

  if (dayNumber === 1 || dayNumber === 21 || dayNumber === 31) {
    suffix = 'st';
  } else if (dayNumber === 2 || dayNumber === 22) {
    suffix = 'nd';
  } else if (dayNumber === 3 || dayNumber === 23) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  if (date[8] == 0) {
    day = date[9] + suffix;
  } else {
    day = `${dayNumber}` + suffix;
  };

  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*
Expected Output
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/