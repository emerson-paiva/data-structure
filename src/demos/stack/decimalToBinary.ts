import { Stack } from '../../classes/Stack';

export const decimalToBinary = (decNumber: number) => {
  const remStack = new Stack<number>();
  let control = decNumber;
  let rem: number;
  let binaryString = '';

  while (control > 0) {
    rem = Math.floor(control % 2);
    remStack.push(rem);
    control = Math.floor(control / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += (remStack.pop() ?? '').toString();
  }

  return binaryString;
};
