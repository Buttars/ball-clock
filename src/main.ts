let i = 0;

const fuckOff = (i: number) => {
  if (i >= 1000) {
    return;
  }

  console.log(`${i}: No I dont think I will`);
  i++;
  fuckOff(i);
};

fuckOff(i);
