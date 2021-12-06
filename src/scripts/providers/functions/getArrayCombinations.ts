const getArrayCombinations = (array: string[]) => {
  const combinations = array.flatMap((v, i) =>
    array.slice(i + 1).map((w) => v + " " + w)
  );
  return combinations;
};

export default getArrayCombinations;
