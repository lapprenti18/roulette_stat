const red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const green = [
  2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
];

const firstDozen = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
const secondDozen = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
const thirdDozen = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];

function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const findSameNbInArray = (array, nb) => {
  var reslt = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === nb) {
      reslt += 1;
    }
  }

  return reslt;
};

const redAndGreenStat = (array) => {
  const data = {
    R: 0,
    G: 0,
    N: 0,
  };
  for (var i = 0; i < array.length; i++) {
    if (red.includes(array[i])) data.R += 1;
    else if (green.includes(array[i])) data.G += 1;
    else data.N += 1;
  }

  return data;
};

const evenAndOddStat = (array) => {
  const data = {
    E: 0,
    O: 0,
    N: 0,
  };
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0) data.N += 1;
    else if (array[i] % 2 === 0) data.E += 1;
    else data.O += 1;
  }

  return data;
};

const halfStat = (array) => {
  const data = {
    F: 0,
    S: 0,
    N: 0,
  };
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0) data.N += 1;
    else if (array[i] < 19) data.F += 1;
    else data.S += 1;
  }

  return data;
};

const dozenStat = (array) => {
  const data = {
    F: 0,
    S: 0,
    T: 0,
    N: 0,
  };
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0) data.N += 1;
    else if (array[i] < 13) data.F += 1;
    else if (array[i] > 12 && array[i] < 25) data.S += 1;
    else data.T += 1;
  }

  return data;
};

const rowsStat = (array) => {
  const data = {
    F: 0,
    S: 0,
    T: 0,
    N: 0,
  };
  for (var i = 0; i < array.length; i++) {
    if (firstDozen.includes(array[i])) data.F += 1;
    else if (secondDozen.includes(array[i])) data.S += 1;
    else if (thirdDozen.includes(array[i])) data.T += 1;
    else data.N += 1;
  }

  return data;
};

const numbersStat = (array) => {
  const data = [];

  for (var i = 0; i <= 36; i++) {
    data.push({ [i]: (findSameNbInArray(array, i) * 100) / array.length });
  }
  return data;
};

const main = async () => {
  const arg = process.argv.slice(2);

  var data = [];

  for (var i = 0; i < arg[0]; i++) {
    data.push(between(0, 36));
  }

  console.log("Red & Green", redAndGreenStat(data));
  console.log("Even & Odd", evenAndOddStat(data));
  console.log("First half & Second half", halfStat(data));
  console.log("3 Dozens", dozenStat(data));
  console.log("3 Rows", rowsStat(data));
  console.log("Numbers", numbersStat(data));
};

main();
