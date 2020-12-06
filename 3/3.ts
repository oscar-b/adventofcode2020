import "../header";
import { data } from "./input";

const count = (right: number, down: number) => {
  let trees = 0;

  for (let y = 0; y < data.length; y++) {
    const row = data[y * down];

    if (row) {
      const x = (y * right) % row.length;

      if (row.charAt(x) === "#") {
        trees++;
      }
    }
  }

  return trees;
};

console.log("First result: ", count(3, 1));

console.log(
  "Second result: ",
  count(1, 1) * count(3, 1) * count(5, 1) * count(7, 1) * count(1, 2)
);
