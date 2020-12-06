import "../header";
import { data } from "./input";

type PassportData = {
  eyr: string;
  hgt: string;
  iyr: string;
  byr: string;
  hcl: string;
  pid: string;
  ecl: string;
};

const input = data.split("\n\n");

const requiredKeys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const optionalKeys = ["cid"];

// First
const approved = input.filter((x) => {
  const data = x.replace(/\n/g, " ").split(" ");
  const keys = data.map((d) => d.split(":")[0]);
  const filteredKeys = keys.filter((k) => !optionalKeys.includes(k));

  return requiredKeys.every((rk) => filteredKeys.includes(rk));
});

console.log("First result: ", approved.length);

// Second
const approved2 = input.filter((x) => {
  const data = x.replace(/\n/g, " ").split(" ");
  const values = data.reduce((acc, d) => {
    const [key, value] = d.split(":");
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  const { eyr, hgt, iyr, byr, hcl, pid, ecl } = values as PassportData;

  if (!eyr || !hgt || !iyr || !byr || !hcl || !pid || !ecl) return false;

  if (Number(byr) < 1920 || Number(byr) > 2002) {
    // console.log("failed byr", byr);
    return false;
  }

  if (Number(iyr) < 2010 || Number(iyr) > 2020) {
    // console.log("failed iyr", iyr);
    return false;
  }

  if (Number(eyr) < 2020 || Number(eyr) > 2030) {
    // console.log("failed eyr", eyr);
    return false;
  }

  if (hgt.endsWith("cm") && (parseInt(hgt) < 150 || parseInt(hgt) > 193)) {
    // console.log("failed hgt (cm)", hgt);
    return false;
  } else if (hgt.endsWith("in") && (parseInt(hgt) < 59 || parseInt(hgt) > 76)) {
    // console.log("failed hgt (in)", hgt);
    return false;
  } else if (!hgt.endsWith("cm") && !hgt.endsWith("in")) {
    // console.log("failed hgt (invalid)", hgt);
    return false;
  }

  if (!hcl.match(/^#[0-9a-fA-F]{6}$/)) {
    // console.log("failed hcl", hcl);
    return false;
  }

  const approvedEcl = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  if (!approvedEcl.includes(ecl)) {
    // console.log("failed ecl", ecl);
    return false;
  }

  if (!pid.match(/^\d{9}$/)) {
    // console.log("failed pid", pid);
    return false;
  }

  return true;
});

console.log("Second result: ", approved2.length);
