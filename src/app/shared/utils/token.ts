export const random = () => {
  return Math.random().toString(36).substr(2);
};

export const token = (value: string) => {
  return random() + getRandomCharsFromString(value, 5) + random();
};

export const getRandomCharsFromString = (
  inputString: string,
  numberOfChars: number
) => {
  let randomChars = '';
  const stringLength = inputString.length;

  for (let i = 0; i < numberOfChars; i++) {
    const randomIndex = Math.floor(Math.random() * stringLength);
    randomChars += inputString[randomIndex];
  }

  return randomChars;
};
