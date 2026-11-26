import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "ERROR 429: Context window exhausted. The rest of this sentence has been outsourced to your imagination.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
