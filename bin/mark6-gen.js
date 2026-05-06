#!/usr/bin/env node

const VERSION = "1.1.0";
const MIN_NUMBER = 1;
const MAX_NUMBER = 49;
const DEFAULT_NUMBER_COUNT = 7;
const DEFAULT_SET_COUNT = 2;
const SET_SIZE = 6;
const MAX_COUNT = 100;

const randomNumber = () => Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;

const generateNumbers = (count) => {
  const numbers = new Set();

  while (numbers.size < count) {
    numbers.add(randomNumber());
  }

  return Array.from(numbers).sort((a, b) => a - b);
};

const chunk = (items, size) => {
  const rows = [];

  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size));
  }

  return rows;
};

const formatNumberRows = (numbers) =>
  chunk(numbers, 3)
    .map((row) => row.map((number) => String(number).padStart(2, " ")).join("  "))
    .join("\n");

const help = () => `mark6-gen v${VERSION}

Generate non-repeating Mark Six numbers from ${MIN_NUMBER} to ${MAX_NUMBER}.

Usage:
  mark6-gen numbers [count]   Generate one set with count numbers (default: ${DEFAULT_NUMBER_COUNT})
  mark6-gen sets [count]      Generate count sets of ${SET_SIZE} numbers (default: ${DEFAULT_SET_COUNT})
  mark6-gen [count]           Alias for: mark6-gen numbers [count]

Examples:
  mark6-gen
  mark6-gen 7
  mark6-gen numbers 6
  mark6-gen sets 10

Options:
  -h, --help      Show this help
  -v, --version   Show the version number`;

const parseCount = (rawValue, defaultValue, label) => {
  if (rawValue === undefined) {
    return defaultValue;
  }

  const count = Number(rawValue);

  if (!Number.isInteger(count) || count < 1) {
    throw new Error(`${label} must be a positive whole number.`);
  }

  if (count > MAX_COUNT) {
    throw new Error(`${label} must be ${MAX_COUNT} or less.`);
  }

  return count;
};

const run = (argv) => {
  const [firstArg, secondArg, ...extraArgs] = argv;

  if (firstArg === "--help" || firstArg === "-h") {
    console.log(help());
    return;
  }

  if (firstArg === "--version" || firstArg === "-v") {
    console.log(VERSION);
    return;
  }

  if (extraArgs.length > 0) {
    throw new Error("Too many arguments. Run `mark6-gen --help` for usage.");
  }

  const mode = firstArg === "sets" || firstArg === "numbers" ? firstArg : "numbers";
  const rawCount = mode === firstArg ? secondArg : firstArg;

  if (mode === "sets") {
    const setCount = parseCount(rawCount, DEFAULT_SET_COUNT, "Set count");
    const sets = Array.from({ length: setCount }, () => generateNumbers(SET_SIZE));

    console.log(`mark6-gen v${VERSION} — ${setCount} set${setCount === 1 ? "" : "s"}`);
    sets.forEach((numbers, index) => {
      console.log(`\nSet ${index + 1}`);
      console.log(formatNumberRows(numbers));
    });
    return;
  }

  const numberCount = parseCount(rawCount, DEFAULT_NUMBER_COUNT, "Number count");

  if (numberCount > MAX_NUMBER) {
    throw new Error(`Number count cannot exceed ${MAX_NUMBER}.`);
  }

  console.log(`mark6-gen v${VERSION} — ${numberCount} number${numberCount === 1 ? "" : "s"}`);
  console.log(formatNumberRows(generateNumbers(numberCount)));
};

try {
  run(process.argv.slice(2));
} catch (error) {
  console.error(`Error: ${error.message}`);
  console.error("Run `mark6-gen --help` for usage.");
  process.exitCode = 1;
}
