const chalk = require('chalk');

console.log(chalk.blue('Opale'));
console.log(chalk.red('Prueba2'));
console.log(chalk.yellow('Hola', 'Como', 'Estas'));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'))
console.log(chalk.white.bgGray('Juan'));


function holaMundo() {
    console.log(chalk.blue.bgRed.bold('Hello world!'))
}

holaMundo();
