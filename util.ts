import { readFile } from 'fs/promises';

export const getInputFromFile = async (path: string) => {
    const data: string = await readFile(path, { encoding: 'utf8' });
    const result = data.split('\n');
    return result;
};
