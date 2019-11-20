import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8"
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

const matchResult = {
  HomeWin: "H",
  AwayWin: "A",
  Draw: "D"
};

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === matchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === matchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
