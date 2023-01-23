import { suma, multiplica } from './modulos/controller.js';
import chalk from 'chalk';

const resultadoSuma_1 = suma(1, 2);
const resultadoSuma_2 = suma(4, 5);
const resultadoMultiplica = multiplica(resultadoSuma_1, resultadoSuma_2);

console.log(chalk.green(resultadoMultiplica));