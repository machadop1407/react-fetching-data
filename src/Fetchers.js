export const getDog = () => () =>
  fetch("https://random.dog/woof.json").then((res) => res.json());
