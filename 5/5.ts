import "../header";
import { data } from "./input";

const seats = data.map((x) => {
  const row = parseInt(x.substr(0, 7).replace(/F/g, "0").replace(/B/g, "1"), 2);
  const col = parseInt(x.substr(7, 3).replace(/L/g, "0").replace(/R/g, "1"), 2);
  const seatId = row * 8 + col;

  return { row, col, seatId };
});

console.log("First result: ", Math.max(...seats.map((s) => s.seatId)));

const firstRow = seats.reduce(
  (acc, val) => Math.min(acc, val.row),
  Number.MAX_SAFE_INTEGER
);

const lastRow = seats.reduce(
  (acc, val) => Math.max(acc, val.row),
  Number.MIN_SAFE_INTEGER
);

const id = seats
  .filter((s) => s.row !== firstRow && s.row !== lastRow)
  .map((s) => s.seatId)
  .sort((a, b) => a - b)
  .find((id, index, ids) => id + 1 !== ids[index + 1]);

console.log("Second result: ", id ? id + 1 : "not found");
