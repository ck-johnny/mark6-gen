const numOfSet = +process.argv[2] || 1;
const sizeOfSet = numOfSet === 1 ? 7 : 6;

const gen = () => {
  console.log("====" + new Date().toLocaleString());
  for (let i = 0; i < numOfSet; i++) {
    const newSet = new Set<number>();
    while (newSet.size < sizeOfSet)
      newSet.add(Math.floor(Math.random() * 49) + 1);
    const sortedArray = Array.from(newSet).sort((a, b) => a - b);
    console.log(i + 1 + ": " + sortedArray);
  }
  console.log("====" + new Date().toLocaleString());
};

gen();
