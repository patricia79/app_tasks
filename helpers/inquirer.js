const inquirer = require("inquirer");
require("colors");

const inquirerMenu = [
  {
    type: "rawlist",
    name: "aplicacio",
    message: red(
      "Benvinguda a l'aplicació App_Tasks. Què vols fer? Escull una opció:"
    ),
    choices: ["verd", "blau", "groc"],
  },
].then((respostes) => {
  console.log("Resposta: ", respostes);
  console.log("=======================".green),
    console.log("Seleccioni una opció:".yellow),
    console.log("=======================\n".green);
  console.log(`Responstes 2: ${respostes}`);
});
