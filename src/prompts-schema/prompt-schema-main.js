import chalk from "chalk";
const mainPromptSchema = [
  {
    name: "select",
    description: chalk.yellow.bold("Selecione (1 - QRDCODE ou (2 - Password"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Seleção inválida. Por favor, escolha 1 ou 2."),
    required: true,
  },
];

export default mainPromptSchema;
