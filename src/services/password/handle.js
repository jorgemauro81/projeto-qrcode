import chalk from "chalk";
import permittedCharacters from "../password/utils/permitted-characters.js";

async function handle() {
  let character = [];
  let password = "";
  const vPasswordLength = process.env.PASSWORD_LENGTH;
  character = await permittedCharacters();

  for (let i = 0; i < vPasswordLength; i++) {
    password += character[Math.floor(Math.random() * character.length)];
  }

  console.log(chalk.green("Generated password:"), password);
  return password;
}

export default handle;
