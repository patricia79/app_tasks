const inquirer = require('inquirer');
require ('colors');


console.log("=======================".green);
console.log("Seleccioni una opció:".yellow);
console.log("=======================\n".green);

const inquirerMenu = [{
  type: 'rawlist',
  message: red("Benvinguda a l'aplicació App_Tasks. Què vols fer? Escull una opció:"),
  name: 'aplicacio',
  choices: [
      "Apple",
      "Pear",
      "Banana"
  ]
}];