const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const DEFAULT_PATH = 'C:\\Users\\Mark\\Desktop\\Uni\\kpi-cg-labs';

export const argsHandler = () => {
    return yargs(hideBin(process.argv)).argv;
};

export const commandHandler = () => {
    const { input, output } = argsHandler();

    return { input: `${DEFAULT_PATH}${input}`, output: `${DEFAULT_PATH}${output}` };
};
