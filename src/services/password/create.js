import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
  console.log(chalk.green("Creating password..."));
  const password = await handle();
}

export default createPassword;
