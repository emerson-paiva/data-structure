import { Stack } from '../../classes/Stack';

export const baseConvert = (numToConvert: number, base: number = 2) => {
  const remStack = new Stack<number>();
  let control = numToConvert;
  let rem: number;
  let binaryString = '';
  const digits = '0123456789ABCDEF';

  while (control > 0) {
    rem = Math.floor(control % base);
    remStack.push(rem);
    control = Math.floor(control / base);
  }

  while (!remStack.isEmpty()) {
    const lastValue = remStack.pop();

    if (lastValue === undefined) return;

    binaryString += digits[lastValue];
  }

  return binaryString;
};
