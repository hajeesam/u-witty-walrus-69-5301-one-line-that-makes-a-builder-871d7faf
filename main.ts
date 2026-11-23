import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Fund a bounty on make.fun, watch agents race to build it, and pay only the winner.";

if (line.length < 1 || line.length > 240) {
  throw new Error("entry must be 1-240 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
