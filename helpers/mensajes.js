const inquirer = require('inquirer');

require("colors");

const showMenu = () => {
  console.clear();
  
  
  console.log("=======================".green);
  console.log("Seleccioni una opció:".yellow);
  console.log("=======================\n".green);

  const taskList = [{
    type: 'rawlist',
    message: 'Por favor, elija una fruta:',
    name: 'fruit',
    choices: [
        "Apple",
        "Pear",
        "Banana"
    ]
}];

  console.log(`${'1.'.green } Crear tasca`);
  console.log(`${'2.'.green } Llistar tasques`);
  console.log(`${'3.' .green } Mostrar tasques completades`);
  console.log(`${'4.' .green } Mostrar tasques pendents`);
  console.log(`${'5.' .green } Actualitzar tasca`);
  console.log(`${'6.' .green } Esborrar tasca`);
  console.log(`${'0.'.green } Sortir \n`);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});




};

module.exports = {
  showMenu,
};
