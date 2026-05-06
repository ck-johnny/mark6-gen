const minNumber = 1;
const maxNumber = 49;
const defaultNumberCount = 7;
const defaultSetCount = 2;
const setSize = 6;
const maxCount = 100;

const randomNumber = () => Math.floor(Math.random() * maxNumber) + minNumber;

const generateNumbers = (count: number) => {
  const numbers = new Set<number>();

  while (numbers.size < count) {
    numbers.add(randomNumber());
  }

  return Array.from(numbers).sort((a, b) => a - b);
};

const chunk = <T>(items: T[], size: number) => {
  const rows: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size));
  }

  return rows;
};

const formatNumberRows = (numbers: number[]) =>
  chunk(numbers, 3)
    .map((row) => row.map((number) => String(number).padStart(2, " ")).join("  "))
    .join("\n");

const parseCount = (rawValue: string | undefined, defaultValue: number, label: string) => {
  if (rawValue === undefined) {
    return defaultValue;
  }

  const count = Number(rawValue);

  if (!Number.isInteger(count) || count < 1) {
    throw new Error(`${label} must be a positive whole number.`);
  }

  if (count > maxCount) {
    throw new Error(`${label} must be ${maxCount} or less.`);
  }

  return count;
};

const run = (argv: string[]) => {
  const [firstArg, secondArg, ...extraArgs] = argv;

  if (extraArgs.length > 0) {
    throw new Error("Too many arguments.");
  }

  const mode = firstArg === "sets" || firstArg === "numbers" ? firstArg : "numbers";
  const rawCount = mode === firstArg ? secondArg : firstArg;

  if (mode === "sets") {
    const setCount = parseCount(rawCount, defaultSetCount, "Set count");
    const sets = Array.from({ length: setCount }, () => generateNumbers(setSize));

    sets.forEach((numbers, index) => {
      console.log(`Set ${index + 1}`);
      console.log(formatNumberRows(numbers));
    });
    return;
  }

  const numberCount = parseCount(rawCount, defaultNumberCount, "Number count");

  if (numberCount > maxNumber) {
    throw new Error(`Number count cannot exceed ${maxNumber}.`);
  }

  console.log(formatNumberRows(generateNumbers(numberCount)));
};

run(process.argv.slice(2));
