import { readFile } from 'fs/promises';

const day1Solution = async (withLetters?: boolean) => {
    const input: string = await readFile('./input.txt', { encoding: 'utf8' });
    const data = input.split('\n');
    const sum = data.reduce((accumulator, currentValue) => {
        let value = currentValue;
        if (withLetters) {
            value = replaceStringWithNumbers(value);
        }
        return accumulator + findFirstAndLastDigit(value);
    }, 0);
    return sum;
};

const findFirstAndLastDigit = (input: string) => {
    let first: string;
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (/^\d+$/.test(char)) {
            first = char;
            break;
        }
    }
    let last: string;
    for (let i = input.length - 1; i >= 0; i--) {
        const char = input[i];
        if (/^\d+$/.test(char)) {
            last = char;
            break;
        }
    }
    return Number(first + last);
};

const replaceStringWithNumbers = (string: string) => {
    return string
        .replace(/one/g, 'one1one')
        .replace(/two/g, 'two2two')
        .replace(/three/g, 'three3three')
        .replace(/four/g, 'four4four')
        .replace(/five/g, 'five5five')
        .replace(/six/g, 'six6six')
        .replace(/seven/g, 'seven7seven')
        .replace(/eight/g, 'eight8eight')
        .replace(/nine/g, 'nine9nine');
};

(async () => {
    const part1 = await day1Solution();
    const part2 = await day1Solution(true);

    console.log('Part 1: ', part1);
    console.log('Part 2: ', part2);
})();
