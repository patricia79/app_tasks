const { createPromptModule } = require('inquirer');

require ('colors');

const showMenu = () => {

    console.clear();
    console.log('=======================');
    console.log('Seleccione una opción:');
    console.log('=======================');

}

module.exports = {
    showMenu
}