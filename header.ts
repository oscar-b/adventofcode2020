import path from "path";

const getDay = () =>
  path
    .dirname(require.main?.filename ?? "")
    .split("/")
    .reverse()[0];

console.log(`### ADVENT OF CODE 2020, day ${getDay()} ###`);
