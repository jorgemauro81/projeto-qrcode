import chalk from "chalk";

async function handle() {
  let character = [];
  let password = "";
  const vPasswordLength = process.env.PASSWORD_LENGTH;

  if (process.env.UPPERCASE_LETTERS === "true") {
    character.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (process.env.LOWERCASE_LETTERS === "true") {
    character.push(..."abcdefghijklmnopqrstuvwxyz");
  }
  if (process.env.NUMERICS === "true") {
    character.push(..."0123456789");
  }
  if (process.env.SPECIAL_CHARACTERS === "true") {
    character.push(..."!@#$%^&*()-+");
  }

  for (let i = 0; i < vPasswordLength; i++) {
    password += character[Math.floor(Math.random() * character.length)];
  }

  console.log(chalk.green("Generated password:"), password);
  return password;
}

export default handle;
