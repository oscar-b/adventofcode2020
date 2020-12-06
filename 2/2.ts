import "../header";
import { data } from "./input";

const firstMatches = data.filter((x) => {
  const [policy, passwd] = x.split(":").map((val) => val.trim());
  const [minmax, letter] = policy.split(" ");
  const [min, max] = minmax.split("-");

  const regex = new RegExp(letter, "g");
  const occurences = (passwd.match(regex) || []).length;

  return Number(min) <= occurences && occurences <= Number(max);
});
console.log("First result: ", firstMatches.length);

const secondMatches = data.filter((x) => {
  const [policy, passwd] = x.split(":").map((val) => val.trim());
  const [positions, letter] = policy.split(" ");
  const [posA, posB] = positions.split("-");

  const matchA = passwd.charAt(Number(posA) - 1) === letter;
  const matchB = passwd.charAt(Number(posB) - 1) === letter;

  return (matchA && !matchB) || (!matchA && matchB);
});
console.log("Second result: ", secondMatches.length);
