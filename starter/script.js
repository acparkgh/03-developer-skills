// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     // value: prompt("Degrees celsius:"),
//   };

//   console.table(measurement);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = +measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let message = "... ";

  for (let i = 0; i < arr.length; i++) {
    message += `${arr[i]}ºC in ${i + 1} days ...`;
  }

  console.log(message);
};

printForecast(data1);
