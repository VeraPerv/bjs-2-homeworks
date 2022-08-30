// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
 // let index = 0;
  min = arr[0];
  max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = (sum / arr.length);

  return {
    min: min,
    max: max,
    avg: Number(avg.toFixed(2))
  };
}
getArrayParams([1, 2, 3, -100, 10]);

// Задание 2

function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
worker([1, 2, 3, 4]);

function makeWork(arrOfArr, func) {
 // let index = 0;
  let max;
  let sum;
  let arrDifference;
  for (let j = 1; j < arrOfArr.length; j++) {
    max = func(arrOfArr[0]);
    sum = func(arrOfArr[j]);
    arrDifference = func(arrOfArr[j]);
    if (sum > max) {
      max = sum;
      //debugger;
      return max;
    }
    if (arrDifference > max) {
      max = arrDifference;
      return Math.abs(max - arrDifference);
   
    //Math.abs(max - arrDifference);
    
  }
}
}
makeWork([
  [10, 10, 11],
  [20, 10]
], worker);
makeWork([
  [-10, -20, -40],
  [10, 20, 30]
], worker2);

// Задание 3
function worker2(arr) {
  //let index = 0;
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
 // let difference = Math.abs(max) - Math.abs(min);
  //return Math.abs(difference);
  return Math.abs(max - min);
}

worker2([-10, -2, 3, 4]);

/*  let min, max, sum, avg;
  sum = 0;
  let index = 0;
  min = arr[index];

  for (let i = index + 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  max = arr[index];
  for (let i = index + 1; i < arr.length; i++) {

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = (sum / arr.length);

  return {
    min: min,
    max: max,
    avg: Number(avg.toFixed(2))
  };
}
getArrayParams([1, 2, 3, -100, 10]);*/

/* function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
 // let index = 0;
  min = arr[0];
  max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = (sum / arr.length);

  return {
    min: min,
    max: max,
    avg: Number(avg.toFixed(2))
  };
}
getArrayParams([1, 2, 3, -100, 10]);

// Задание 2

function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
worker([1, 2, 3, 4]);

function makeWork(arrOfArr, func) {
 // let index = 0;
  let max;
  let sum;
  let arrDifference;
  for (let j = 1; j < arrOfArr.length; j++) {
    max = func(arrOfArr[0]);
    sum = func(arrOfArr[j]);
    arrDifference = func(arrOfArr[j]);
    if (sum > max) {
      max = sum;
      return max;
    } else {
      return max;
    }
    if (arrDifference > max) {
      max = arrDifference;
      return Math.abs(max) - Math.abs(arrDifference);
    } else {
      return Math.abs(max) - Math.abs(arrDifference);
    }

  }
}
makeWork([
  [10, 10, 11],
  [20, 10]
], worker);
makeWork([
  [-10, -20, -40],
  [10, 20, 30]
], worker2);

// Задание 3
function worker2(arr) {
  //let index = 0;
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
 // let difference = Math.abs(max) - Math.abs(min);
  //return Math.abs(difference);
  return Math.abs(max - min);
}

worker2([-10, -2, 3, 4]);
*/