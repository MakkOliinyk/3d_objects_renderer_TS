const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const DEFAULT_PATH = 'C:\\Users\\Mark\\Desktop\\Uni\\kpi-cg-labs';

export const pathHandler = () => {
    const { input, output } = yargs(hideBin(process.argv)).argv

    return { input: `${DEFAULT_PATH}${input}`, output: `${DEFAULT_PATH}${input}` };
};
