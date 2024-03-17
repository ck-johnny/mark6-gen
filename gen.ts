const num = +process.argv[2] || 1;

const gen = () => {
  for (let i = 0; i < num; i++) {
    const newSet = new Set<number>();
    while (newSet.size < 6) newSet.add(Math.floor(Math.random() * 49) + 1);
    const sortedArray = Array.from(newSet).sort((a, b) => a - b);
    console.log(sortedArray);
  }
};

gen();
