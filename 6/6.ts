import "../header";
import { data } from "./input";

const input = data.split("\n\n");

const approved1 = input
  .map((x) => new Set(x.replace(/\n/g, "").split("")))
  .reduce((acc, x) => acc + x.size, 0);

console.log("First result: ", approved1);

const approved2 = input
  .map((x) => x.split("\n"))
  .map((x) =>
    x
      .map((z) => z.split(""))
      .reduce((acc, v) => acc.filter((u) => v.includes(u)))
  )
  .reduce((acc, x) => acc + x.length, 0);

console.log("Second result: ", approved2);
