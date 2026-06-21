import prompt from "prompt";
import mainPromptSchema from "./prompts-schema/prompt-schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(mainPromptSchema, async (err, choose) => {
    if (err) {
      console.error("Error:", err);
      return;
    }
    if (choose.select == "1") await createQRCode();
    else if (choose.select == "2") await createPassword();
  });

  prompt.start();
}

main();
