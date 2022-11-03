import chalk from 'chalk';
console.log(chalk.blue('today is wednesday'));



const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));