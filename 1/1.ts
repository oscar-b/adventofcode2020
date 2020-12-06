import "../header";
import { data } from "./input";

// Sum of two values hould equal 2020
data.forEach((a) => {
  data.forEach((b) => {
    if (a + b === 2020) {
      console.log(
        `The values you're looking for are: ${a} and ${b}, which gives an answer of ${
          a * b
        }`
      );
    }
  });
});

// Sum of three values hould equal 2020
data.forEach((a) => {
  data.forEach((b) => {
    data.forEach((c) => {
      if (a + b + c === 2020) {
        console.log(
          `The values you're looking for are: ${a}, ${b} and ${c}, which gives an answer of ${
            a * b * c
          }`
        );
      }
    });
  });
});
