import chalk from "chalk";
const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow.bold("Digite o link para gerar o QRCode"),
    required: true,
  },
  {
    name: "type",
    description: chalk.yellow.bold(
      "Digite entre o tipo de QRCode (1-Normal ou (2-Terminal",
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic(
      "Tipo de QRCode inválido. Por favor, escolha 1 ou 2.",
    ),
    required: true,
  },
];

export default promptQRCode;
