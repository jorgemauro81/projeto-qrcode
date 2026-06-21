import chalk from "chalk";
import qrcode from "qrcode-terminal";
async function handle(err, result) {
  if (err) {
    console.error("Erro na aplicação");
    return;
  }
  const isSmall = result.type == "2";
  qrcode.generate(result.link, { small: isSmall }, (qrcode) => {
    // if (err) {
    //   console.error("Erro ao gerar o QRCode");
    //   return;
    // }
    console.log(chalk.green("QRCode gerado com sucesso:\n"));
    console.log(qrcode);
  });
}

export default handle;
