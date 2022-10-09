import { RomanNumerals } from './constants';

export function arabicToRoman(num: number) {
  let str = '';

  for (let i of Object.keys(RomanNumerals)) {
    const q = Math.floor(num / RomanNumerals[i]);
    num -= q * RomanNumerals[i];
    str += i.repeat(q);
  }

  return str;
}
