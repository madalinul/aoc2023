import { readFile } from 'fs/promises';

const cubesLimit = {
    red: 12,
    green: 13,
    blue: 14,
};

const part1Solution = async () => {
    const input: string = await readFile('./input.txt', { encoding: 'utf8' });
    const data = input.split('\n');

    let sum = 0;

    data.forEach((line, index) => {
        const [, cubesInfo] = line.split(':');
        const gameId = index + 1;
        const sets = cubesInfo.split('; ');
        let isImpossible = false;
        for (const set of sets) {
            const cubes = set.split(', ');
            for (const cube of cubes) {
                const [number, color] = cube.split(' ');
                if (cubesLimit[color] < number) {
                    console.log(cubesLimit[color], color, number);
                    isImpossible = true;
                    break;
                }
            }
            if (isImpossible) {
                break;
            }
        }
        if (!isImpossible) {
            sum += gameId;
        }
    });
    return sum;
};

const part2Solution = async () => {
    const input: string = await readFile('./input.txt', { encoding: 'utf8' });
    const data = input.split('\n');

    let sum = 0;

    data.forEach((line) => {
        const [, cubesInfo] = line.split(': ');
        const sets = cubesInfo.split('; ');
        const maxMap = {
            red: 0,
            green: 0,
            blue: 0,
        };
        for (const set of sets) {
            const cubes = set.split(', ');
            for (const cube of cubes) {
                const [numberS, color] = cube.split(' ');
                const number = parseInt(numberS);
                if (maxMap[color] < number) {
                    maxMap[color] = number;
                }
            }
        }
        const power = maxMap.blue * maxMap.green * maxMap.red;
        // console.log(maxMap, power);
        sum += power;
    });
    return sum;
};

(async () => {
    const part1 = await part1Solution();
    const part2 = await part2Solution();

    console.log('Part 1: ', part1);
    console.log('Part 2: ', part2);
})();
